import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'

export default class MyDocument extends Document {
  override render(): ReactElement {
    return (
      <Html lang="fr">
        <Head />
        <body data-testid="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
