import Head from 'next/head'
import StoreLocatorIndex from '../components/store-locator'

export default function StoreLocator() {
  return (
    <>
      <Head>
        <title>店舗検索 - OWNDAYS</title>
        <meta name="description" content="お近くのOWNDAYS店舗を検索 - 全国の店舗情報、営業時間、連絡先" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoreLocatorIndex />
    </>
  )
}
