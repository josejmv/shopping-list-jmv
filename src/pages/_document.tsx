import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const keywords = [
    'todo',
    'list',
    'josejmv',
    'next.js',
    'cypress',
    'project',
    'react.js'
  ]

  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='author' content='JoseJMV' />
        <meta name='copyright' content='JoseJMV' />
        <meta name='keywords' content={keywords.join()} />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
