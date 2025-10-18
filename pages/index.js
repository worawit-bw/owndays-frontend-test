import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>OWNDAYS - メガネのOWNDAYS</title>
        <meta name="description" content="OWNDAYS landing page - みんなメガネ割キャンペーン" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      
      {/* Font Testing Section - Remove after testing */}
      {/* <div className="p-8 bg-gray-100">
        <h2 className="text-2xl mb-4">Font Testing:</h2>
        <p className="font-outfit text-lg mb-2">Outfit Font Test (Google Fonts) - 日本語テスト</p>
        <p className="font-mizolet text-lg mb-2">Mizolet Font Test (Typekit) - 日本語テスト</p>
        <p className="font-yu-gothic text-lg mb-2">Yu Gothic Font Test (Typekit) - 日本語テスト</p>
        <p className="text-lg">Default Font Test - 日本語テスト</p>
      </div> */}
    </>
  )
}
