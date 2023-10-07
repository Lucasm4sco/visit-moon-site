import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body
        className={`bg-[url('/img/bg-stars.png')] min-h-[500vh]`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
