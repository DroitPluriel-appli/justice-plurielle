import Head from 'next/head'
import { ReactElement } from 'react'

import { Lieu } from '../../backend/entities/Lieu'
import { useDependencies } from '../../configuration/useDependencies'
import CarteLieu from '../CarteLieu/CarteLieu'
import EnTete from './EnTete'

export default function ResultatsListe({ lieux }: { lieux: Lieu[] }): ReactElement {
  const { useRouter, wording } = useDependencies()
  const { query } = useRouter()

  if (query.lat === undefined || query.lon === undefined) {
    return (
      <p>
        {wording.RECOMMENCER_PARCOURS}
      </p>
    )
  }

  return (
    <>
      <Head>
        <title>
          {wording.TITLE_PAGE_ADRESSE_LISTE}
        </title>
      </Head>
      <EnTete nombreDeLieuxTrouves={lieux.length} />
      {
        lieux.map((lieu) => {
          return (
            <CarteLieu
              key={lieu.id}
              lieu={lieu}
            />
          )
        })
      }
    </>
  )
}
