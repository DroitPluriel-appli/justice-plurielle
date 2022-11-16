import Head from 'next/head'
import { ReactElement } from 'react'

import { useDependencies } from '../../configuration/useDependencies'

export default function RechercherUnLieu(): ReactElement {
  const { wording } = useDependencies()

  return (
    <>
      <Head>
        <title>
          {wording.TITLE_PAGE_RECHERCHER_UNE_CONSULTATION_JURIDIQUE}
        </title>
      </Head>
      {wording.TITLE_PAGE_RECHERCHER_UNE_CONSULTATION_JURIDIQUE}
    </>
  )
}
