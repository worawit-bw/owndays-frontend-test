import Head from 'next/head'
import SearchProductsIndex from '../components/search-products'

export default function SearchProducts() {
  return (
    <>
      <Head>
        <title>商品検索 - OWNDAYS</title>
        <meta name="description" content="OWNDAYSの全商品 - メガネ、サングラス、レンズの豊富なコレクションから検索" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchProductsIndex />
    </>
  )
}
