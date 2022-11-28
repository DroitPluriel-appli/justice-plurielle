import Head from 'next/head'
import { ReactElement } from 'react'

import { useDependencies } from '../configuration/useDependencies'

export default function SecuriteInformatique(): ReactElement {
  const { wording } = useDependencies()

  return (
    <>
      <Head>
        <title>
          {wording.TITLE_PAGE_SECURITE_INFORMATIQUE}
        </title>
      </Head>
      {wording.TITLE_PAGE_SECURITE_INFORMATIQUE}
    </>
  )
}