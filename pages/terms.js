import Head from 'next/head'
import Terms from '../components/terms'

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>利用規約 | OWNDAYS</title>
        <meta name="description" content="OWNDAYS（タイランド）株式会社のサービス利用規約です。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="利用規約 | OWNDAYS" />
        <meta property="og:description" content="OWNDAYS（タイランド）株式会社のサービス利用規約です。" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="利用規約 | OWNDAYS" />
        <meta name="twitter:description" content="OWNDAYS（タイランド）株式会社のサービス利用規約です。" />
      </Head>
      <Terms />
    </>
  )
}
