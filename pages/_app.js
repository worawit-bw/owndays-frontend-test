import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  return <>
    <Head>
      <script src="https://use.typekit.net/ldm8iso.js" async></script>
      <script 
        dangerouslySetInnerHTML={{
          __html: `try{Typekit.load({ async: true });}catch(e){}`
        }} 
        defer
      />
    </Head>
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
