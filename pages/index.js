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
    </>
  )
}
