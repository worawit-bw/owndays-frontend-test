import BoxMessage from "../button/BoxMessage"
import ButtonBox from "../button/ButtonBox"
import ProductCard from "../card/ProductCard"
import Image from 'next/image'

const Collection = () => {
  return (
    <div className="max-w-[1440px] w-full bg-[#7ABC8C] mx-auto rounded-t-[130px] lg:rounded-t-[170px]">
      {/* Family */}
      <div className="py-[100px] sm:py-[110px] xl:py-[150px]">
        {/* Description */}
        <div className="grid grid-cols-[1fr_1.5fr] md:grid-cols-[1fr_1fr] gap-4 sm:gap-6 lg:gap-10 mb-[10%] px-[7%] md:px-[9%] xl:px-[12.5%] ">
          <div className="w-max md:w-full relative">
            <div className="text-[60px] md:text-[80px] lg:text-[120px] xl:text-[clamp(146px,1vw,12px)] font-black text-white leading-[1] tracking-[10px]">
              FAMILY
            </div>

            <Image 
              src="/assets/image/family.png" 
              alt="Family illustration"
              width={600}
              height={400}
              className="absolute top-0 w-[70%] max-w-[600px] mt-[12%] left-[50%] transform -translate-x-1/2" 
            />
          </div>

          <div className="flex flex-col mt-[0%] xl:mt-[20%] w-full">
            <div className="hidden sm:flex w-full items-center text-[20px] lg:text-[22px] tracking-[1px]"> 
              <span className="text-black flex items-center">小さなお子様がいる 家庭でも
                <p className="flex  justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">安</p>
                <p className="flex  justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">心</p>
              </span>
            </div>

            <div className="flex sm:hidden w-full items-center text-[22px] tracking-[1px]"> 
              <span className="text-black flex items-center">小さなお子様がいる</span>
              <span className="text-black flex items-center">家庭でも
                <p className="flex  justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">安</p>
                <p className="flex  justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">心</p>
              </span>
            </div>

            <div className="flex text-black text-[25px] md:text-[30px] lg:text-[36px] bg-white max-w-max px-[14px] py-[5px] mt-4.5 mb-7 tracking-[2px]">
              軽くて丈夫なフレーム
            </div>

            <div className="text-black tracking-[1px] text-[14px] leading-7">
              小さな子供がいるご家庭には、軽量で丈夫な樹脂素材のフレームが最適！行楽シーズンにあわせて家族でまとめて新調してみては？傷防止やUVカットの機能が搭載されたオプションレンズもおすすめ。
            </div>
          </div>
        </div>

        {/* Product */}
        <div className="grid grid-cols-[1fr_1fr_1fr] w-full bg-white rounded-2xl px-[5px] py-[35px] max-w-[1100px] mx-auto">
          <ProductCard type='glasses' productName='air' productCode='au2101e-3a c3 カーキ' productImg='/assets/image/glasses_1.png' isFavorite bgColor="#468A59" productPrice='11,000'/>
          <ProductCard type='sunglasses' productName='sun' productCode='sun2107n-4s c1 ブラック' productImg='/assets/image/glasses_2.png' isFavorite bgColor="#468A59" productPrice='8,000'/>
          <ProductCard type='kids glasses' productName='junni' productCode='ju2037n-4s c3 クリアブルー' productImg='/assets/image/glasses_3.png' isFavorite bgColor="#468A59" productPrice='7,000'/>
        </div>

        {/* Option */}
        <div className="flex p-[90px] bg-[#58AB6F] mt-[110px]">
          <div className="flex flex-col">
            <></>

            <p className="text-[30px] text-black font-mizolet tracking-[1px]">おすすめオプション</p>
          </div>

          <div className="grid grid-cols-[1fr_1fr]">
            <ButtonBox title="傷防止コート" message="「レンズの傷が気になる方」におすすめ！ブルーライトカット機能を搭載した、傷に強い特殊コーティング。"/>
            <ButtonBox title="UV・PCダブルカットレンズ" message="目と肌に影響を及ぼすUV-A・UV-Bと、パソコン・スマホ使用時に気になるブルーライトをカットします。"/>
          </div>
        </div>

        {/* Check */}
        <div className="max-w-[70%] mt-[85px] mb-[100px] mx-auto bg-white rounded-[20px] py-[46px] px-[49px] flex relative">
          <Image src="/assets/image/tablet_laptop_and_smartphone.png" alt="Check illustration" width={600} height={400} className="w-[31%]" />

          <div className="flex flex-col  justify-center ml-[21px] relative">
            <span className="flex text-black text-[22px] tracking-[1px]">お子さまの度数や保証書を
              <p className="bg-yellow text-black text-[22px] font-mizolet tracking-[1px]">一括管理！</p>
            </span>

            <span className="text-[36px] text-black font-mizolet mt-4 tracking-[1px]">
              親子で楽らくリンク機能
            </span>
          </div>

          <div className="flex flex-col  justify-center text-center absolute right-[40px] top-[-25px]">
            <BoxMessage message='CHECK!' textColor="black"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection