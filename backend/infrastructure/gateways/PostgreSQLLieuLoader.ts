import { DataSource } from 'typeorm'

import { LieuModel } from '../../../database/models/LieuModel'
import { Lieu } from '../../entities/Lieu'
import { LieuLoader } from '../../entities/LieuLoader'

export class PostgreSQLLieuLoader implements LieuLoader {
  constructor(private readonly orm: Promise<DataSource>) {}

  async recupereUnLieu(id: number, latitude = 0, longitude = 0): Promise<Lieu[]> {
    const lieuxModel = await (await this.orm)
      .getRepository(LieuModel)
      .findBy({ id })

    return this.transformeEnLieu(this.ajouteLaDistance(lieuxModel, latitude, longitude))
  }

  // @ts-ignore
  async recupereDesLieux(
    latitude: number,
    longitude: number,
    page = 0,
    nombreDeLieuxAffichesParPage = 10,
    accessibilites = []
  ): Promise<Lieu[]> {
    const vingtKilometres = 0.2

    const accessibilitesSQL = accessibilites
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .map((accessibilite) => ` AND ${accessibilite} = true`)
      .join('')

    const lieuxModel = await (await this.orm)
      .getRepository(LieuModel)
      .query(`SELECT *, code_postal AS "codePostal", domaine_de_droit AS "domaineDeDroit", e_mail AS "eMail", prise_de_rendez_vous AS "priseDeRendezVous", site_internet AS "siteInternet", ABS(latitude - $1) + ABS(longitude - $2) AS distance FROM lieu WHERE (latitude BETWEEN $3 AND $4 AND longitude BETWEEN $5 AND $6) ${accessibilitesSQL} ORDER BY distance ASC LIMIT $7 OFFSET $8`, [
        latitude,
        longitude,
        latitude - vingtKilometres,
        latitude + vingtKilometres,
        longitude - vingtKilometres,
        longitude + vingtKilometres,
        nombreDeLieuxAffichesParPage,
        page * nombreDeLieuxAffichesParPage,
      ]) as LieuModel[]

    return this.transformeEnLieu(lieuxModel)
  }

  private transformeEnLieu(lieuxModel: LieuModel[]): Lieu[] {
    return lieuxModel.map((lieuModel): Lieu => {
      return new Lieu(
        lieuModel.adresse,
        lieuModel.bim,
        lieuModel.calme,
        lieuModel.codePostal,
        lieuModel.commentaire,
        lieuModel.departement,
        Number((lieuModel.distance as number * 100).toPrecision(2)),
        lieuModel.domaineDeDroit,
        lieuModel.eMail,
        lieuModel.forme,
        lieuModel.horaire,
        lieuModel.id,
        lieuModel.latitude,
        lieuModel.longitude,
        lieuModel.lsf,
        lieuModel.nom,
        lieuModel.pmr,
        lieuModel.pmr_assiste,
        lieuModel.priseDeRendezVous,
        lieuModel.region,
        lieuModel.siteInternet,
        lieuModel.telephone,
        lieuModel.ville,
        lieuModel.visuel
      )
    })
  }

  private ajouteLaDistance(lieuxModel: LieuModel[], latitude: number, longitude: number) {
    return lieuxModel.map((lieuModel) => {
      return {
        ...lieuModel,
        distance: Math.abs(lieuModel.latitude - latitude) + Math.abs(lieuModel.longitude - longitude),
      }
    })
  }
}
