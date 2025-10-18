import Head from 'next/head'
import PrivacyPolicy from '../components/privacy'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>プライバシーポリシー - OWNDAYS</title>
        <meta name="description" content="OWNDAYS（タイランド）株式会社の個人情報保護方針について" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrivacyPolicy />
    </>
  )
}
