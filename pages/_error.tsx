import * as Sentry from '@sentry/nextjs'
import { NextPageContext } from 'next'
import NextErrorComponent, { ErrorProps } from 'next/error'

function CustomErrorComponent({ statusCode }: ErrorProps) {
  return <NextErrorComponent statusCode={statusCode} />
}

CustomErrorComponent.getInitialProps = async (contextData: NextPageContext): Promise<ErrorProps> => {
  await Sentry.captureUnderscoreErrorException(contextData)

  return NextErrorComponent.getInitialProps(contextData)
}

export default CustomErrorComponent
