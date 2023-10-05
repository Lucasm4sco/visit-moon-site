import { Html, Head, Main, NextScript } from 'next/document'

import Heading from '../components/heading'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body
        className={`bg-[url('/img/bg-stars.png')] min-h-[500vh]`}
      >
        <Heading />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
