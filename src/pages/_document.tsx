import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head >
        <meta name="author" content="Lucas Polles"></meta>
        <meta name="description" content="Apresentação de uma empresa que vende passagens de viagens até a Lua"></meta>
        <meta name="keywords" content="visit moon, lua, site, desenvolvimento"></meta>
        <meta name="dcterms.rightsHolder" content="© 2022 Vitor Gaioso, © 2023 Lucasm4sco" />
        <meta name="robots" content="index, nofollow" />
      </Head>
      <body className="bg-[url('/img/bg-stars.png')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
