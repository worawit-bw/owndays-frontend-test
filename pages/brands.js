import Head from 'next/head'
import BrandsIndex from '../components/brands'

export default function Brands() {
  return (
    <>
      <Head>
        <title>ブランド - OWNDAYS</title>
        <meta name="description" content="OWNDAYSの高品質メガネ・サングラスブランド - 機能性とモダンなデザインを兼ね備えた豊富なコレクション" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BrandsIndex />
    </>
  )
}
