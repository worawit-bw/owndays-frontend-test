import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/landing'

export default function Home() {
  return (
    <>
      <Head>
        {/* Meta Tags */}
        <title>OWNDAYS ONLINE STORE - ร้านแว่นตา｜แว่นตา/ร้านแว่นตา/ร้านแว่น/แว่นกันแดด/แว่น</title>
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico"/>
        <link rel="canonical" href="https://www.owndays.com/th/th/"/>

        <meta property="og:title" content="OWNDAYS ONLINE STORE - ร้านแว่นตา｜แว่นตา/ร้านแว่นตา/ร้านแว่น/แว่นกันแดด/แว่น"></meta>
        <meta name="description" content="ร้านแว่นตาOWNDAYS มีกรอบแว่นให้เลือกหลากหลายสไตล์ ทั้งกรอบแว่นตาแฟชั่น แว่นกันแดด ราคากรอบพร้อมเลนส์เริ่มต้นที่THB1,990 ไม่มีค่าเลนส์เพิ่มเติมไม่ว่าคุณจะมีค่าสายตาสูงเท่าไหร่ก็ตาม"></meta>
        <meta name="keywords" content="แว่นตา,ร้านแว่นตา,ร้านแว่น,แว่นกันแดด,แว่น,ผลิตจากประเทศญี่ปุ่น,กรอบแว่น"></meta>
        <meta property="og:description" content="ร้านแว่นตาOWNDAYS มีกรอบแว่นให้เลือกหลากหลายสไตล์ ทั้งกรอบแว่นตาแฟชั่น แว่นกันแดด ราคากรอบพร้อมเลนส์เริ่มต้นที่THB1,990 ไม่มีค่าเลนส์เพิ่มเติมไม่ว่าคุณจะมีค่าสายตาสูงเท่าไหร่ก็ตาม"></meta>
        <meta property="og:site_name" content="OWNDAYS ONLINE STORE - ร้านแว่นตา"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.owndays.com/th/th"></meta>
        <meta property="twitter:site" content="https://www.owndays.com/th/th"></meta>
        <meta property="twitter:url" content="https://www.owndays.com/th/th"></meta>
        <meta property="og:image" content="https://www.owndays.com/images/common/ogp_1200x630.jpg?1721275977"></meta>
        <meta property="fb:app_id" content="1652608281689487"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, minimal-ui"></meta>
      </Head>

      <Landing />
    </>
  )
}
