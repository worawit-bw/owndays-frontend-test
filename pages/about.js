import Head from 'next/head'
import AboutIndex from '../components/about'

export default function About() {
  return (
    <>
      <Head>
        <title>私たちについて - OWNDAYS</title>
        <meta name="description" content="OWNDAYS会社情報 - アジアをリードするアイウェアブランド、12カ国に展開" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutIndex />
    </>
  )
}
