import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'

import { useDependencies } from '../../configuration/useDependencies'
import BackLink from '../BackLink/BackLink'
import styles from './RechercherUneAideJuridique.module.css'
import { useRechercherUneAideJuridique } from './useRechercherUneAideJuridique'

export default function RechercherUneAideJuridique(): ReactElement {
  const { paths, wording } = useDependencies()
  const { buttonName, isDisabled, keyDown, touch } = useRechercherUneAideJuridique()

  return (
    <div className={styles.main}>
      <Head>
        <title>
          {wording.TITLE_PAGE_RECHERCHER_UNE_AIDE_JURIDIQUE}
        </title>
      </Head>
      <BackLink
        className="white"
        url={paths.ACCUEIL}
      >
        {wording.RETOUR_A_L_ACCUEIL}
      </BackLink>
      <h2 className={styles.title}>
        {wording.OU_RECHERCHEZ_VOUS}
        <div>
          {wording.OBLIGATOIRE}
        </div>
      </h2>
      <button
        className={`${styles.button} ${styles.positionActuelle}`}
        disabled={isDisabled}
        onClick={touch}
        onKeyDown={keyDown}
        onTouchStart={touch}
        type="button"
      >
        {buttonName}
      </button>
      <div className={styles.ou}>
        {wording.OU}
      </div>
      <Link
        className={`${styles.button} ${styles.renseignerAdresse}`}
        href={paths.RENSEIGNER_UNE_ADRESSE}
      >
        {wording.RENSEIGNER_UNE_ADRESSE}
      </Link>
    </div>
  )
}
