// next
import Head from 'next/head'

// constext providers
import { AppContextProvider } from '@contexts/app/provider'

// components
import { Sidebar } from '@molecules/sidebar'

// global styles
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import '@styles/globals.scss'

// styles
import classes from '@styles/ui/layout.module.scss'

// types
import { AppProps } from 'next/app'
import { NextPage } from 'next'
import { Container } from 'react-bootstrap'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const permalink = 'https://shopping-list-jmv.vercel.app'

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

      <AppContextProvider>
        <Sidebar />

        <Container className={classes.container}>
          <Component {...pageProps} />
        </Container>
      </AppContextProvider>
    </>
  )
}

export default App
