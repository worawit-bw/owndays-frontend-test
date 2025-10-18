import Head from 'next/head'
import LensesIndex from '../components/lenses'

export default function Lenses() {
  return (
    <>
      <Head>
        <title>レンズガイド - OWNDAYS</title>
        <meta name="description" content="OWNDAYSの高品質レンズ - 非球面、遠近両用、PC、調光レンズなど" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LensesIndex />
    </>
  )
}
