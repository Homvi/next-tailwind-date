import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Footer from "../components/Footer"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DateNow</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content='Találd meg a párod akár perceken belül' />ó
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
