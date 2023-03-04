// next
import Head from 'next/head'

// styles
import 'styles/globals.scss'

// types
import { AppProps } from 'next/app'
import { NextPage } from 'next'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const permalink = 'https://todo-list-jmv.vercel.app'

  return (
    <>
      <Head>
        <title>Shopping list - JoseJMV</title>
        <link rel='canonical' href={permalink} />
        <meta name='theme-color' content='#0050ac' />
        <link rel='manifest' href='/manifest.json' />
        <meta property='og:type' content='website' />
        <meta name='robots' content='index follow' />
        <meta property='og:url' content={permalink} />
        <link rel='apple-touch-icon' href='/icon.png' />
        <meta property='og:title' content='Shopping list - JoseJMV' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Shopping list project made by JoseJMV'
        />
        <meta
          property='og:description'
          content='Shopping list project made by JoseJMV'
        />
        <meta
          property='og:image'
          content={`${permalink}/assets/logo/icon-192x192.png`}
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
