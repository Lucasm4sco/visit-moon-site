import { Html, Head, Main, NextScript } from 'next/document'
import { AriergardRondoBook } from '@/fonts/fonts'

import Heading from './heading'


export default function Document() {
  return (
    <Html lang="pt-br">
      <Head/>
      <body
        className={`bg-[url('/img/bg-stars.png')] min-h-[500vh] ${AriergardRondoBook.className}`}
      >
        <Heading /> 
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
