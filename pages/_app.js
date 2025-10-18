import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    // Load Adobe Typekit fonts after component mounts
    const script = document.createElement('script');
    script.src = 'https://use.typekit.net/ldm8iso.js';
    script.async = true;
    
    script.onload = () => {
      try {
        if (window.Typekit) {
          window.Typekit.load({ async: true });
          console.log('Typekit fonts loaded successfully');
        }
      } catch (e) {
        console.error('Error loading Typekit fonts:', e);
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  return <>
    <Head>
      <title>OWNDAYS - メガネ・サングラスの専門店</title>
      <meta name="description" content="OWNDAYS eyewear store - Quality glasses and sunglasses" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
