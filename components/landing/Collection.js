import BoxMessage from "../button/BoxMessage"
import ButtonBox from "../button/ButtonBox"
import ProductCard from "../card/ProductCard"
import Image from 'next/image'

const Collection = () => {
  return (
    <div className="max-w-[1440px] w-full bg-[#7ABC8C] mx-auto rounded-t-[90px] sm:rounded-t-[130px] lg:rounded-t-[170px]">
      {/* Family */}
      <div className="pt-[90px] sm:pt-[110px] xl:pt-[150px]">
        {/* Description */}
        <div className="grid sm:grid-cols-[1fr_1.5fr] md:grid-cols-[1fr_1fr] gap-4 sm:gap-6 lg:gap-10 mb-[10%] px-4 sm:px-[7%] md:px-[9%] xl:px-[12.5%] ">
          <div className="w-full sm:w-max md:w-full sm:flex sm:justify-center relative">
            <div className="text-[70px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[clamp(146px,1vw,12px)] text-center font-black text-white leading-[1] tracking-[10px]">
              FAMILY
            </div>

            <Image 
              src="/assets/image/family.png" 
              alt="Family illustration"
              width={600}
              height={400}
              zIndex={10}
              className="relative sm:absolute top-0 sm:top-[-10px] md:top-0 w-[70%] max-w-[350px] sm:max-w-[600px] mt-[-35px] sm:mt-[12%] left-[50%] transform -translate-x-1/2" 
            />
          </div>

          <div className="flex flex-col mt-[25px] sm:mt-[0%] xl:mt-[20%] w-full">
            <div className="hidden sm:flex w-full items-center text-[20px] lg:text-[22px] tracking-[1px]"> 
              <span className="text-black flex items-center">小さなお子様がいる 家庭でも
                <p className="flex justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">安</p>
                <p className="flex justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">心</p>
              </span>
            </div>

            <div className="flex flex-wrap  justify-center mx-auto sm:hidden max-w-[200px] sm:w-full items-center text-[20px] sm:text-[22px] tracking-[1px]"> 
              <span className="text-black flex items-center">小さなお子様がいる</span>
              <span className="text-black flex items-center">家庭でも
                <p className="flex justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">安</p>
                <p className="flex justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">心</p>
              </span>
            </div>

            <div className="flex text-black text-[27px] mx-auto sm:mx-0 sm:text-[25px] md:text-[30px] lg:text-[36px] bg-white max-w-max px-[8px] py-[3px] sm:px-[14px] sm:py-[5px] mt-4.5 mb-7 tracking-[2px]">
              軽くて丈夫なフレーム
            </div>

            <div className="text-black tracking-[1px] max-w-[308px] sm:max-w-full mx-auto sm:mx-0 text-[13px] sm:text-[14px] leading-7">
              小さな子供がいるご家庭には、軽量で丈夫な樹脂素材のフレームが最適！行楽シーズンにあわせて家族でまとめて新調してみては？傷防止やUVカットの機能が搭載されたオプションレンズもおすすめ。
            </div>
          </div>
        </div>

        {/* Product */}
        <div className="mt-[40px] sm:mt-[70px] lg:mt-[140px] w-full px-4 sm:-[30px] md:-[50px] lg:px-[11.5%]">
          <div className="w-full max-w-[357px] md:max-w-none mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-2 rounded-2xl px-0 sm:px-2 lg:px-5 py-8 sm:py-5 bg-white">
            <ProductCard type='glasses' productName='air' productCode='au2101e-3a c3 カーキ' productImg='/assets/image/glasses_1.png' isFavorite bgColor="#468A59" productPrice='11,000'/>
            <ProductCard type='sunglasses' productName='sun' productCode='sun2107n-4s c1 ブラック' productImg='/assets/image/glasses_2.png' isFavorite bgColor="#468A59" productPrice='8,000'/>
            <ProductCard type='kids glasses' productName='junni' productCode='ju2037n-4s c3 クリアブルー' productImg='/assets/image/glasses_3.png' isFavorite bgColor="#468A59" productPrice='7,000'/>
          </div>
        </div>

        {/* Option */}
        <div className="flex flex-wrap md:flex-nowrap py-15 px-5 lg:p-21 bg-[#58AB6F] mt-[110px] justify-between">
          <div className="flex flex-col justify-center mx-auto md:mx-0 w-full md:w-max">
            <div className="flex flex-col justify-center text-center relative">
              <BoxMessage message='OPTION' textColor="black"/>
            </div>

            <p className="text-[26px] md:text-[30px] text-black text-center font-mizolet tracking-[1px] mt-8">おすすめオプション</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 mx-auto md:mx-0 mt-7 md:mt-0">
            <ButtonBox title="傷防止コート" message="「レンズの傷が気になる方」におすすめ！ブルーライトカット機能を搭載した、傷に強い特殊コーティング。" price="6,000" arrowDirection="right"/>
            <ButtonBox title="UV・PCダブルカットレンズ" message="目と肌に影響を及ぼすUV-A・UV-Bと、パソコン・スマホ使用時に気になるブルーライトをカットします。" price="6,000" arrowDirection="right"/>
          </div>
        </div>

        {/* Check */}
        <div className="group max-w-[350px] sm:max-w-[922px] mt-[60px] sm:mt-[85px] mb-[100px] mx-auto sm:mx-10 lg:mx-auto bg-white rounded-[18px] sm:rounded-[24px] lg:rounded-[20px] py-[36px] md:py-[46px] px-[40px] md:px-[49px] flex flex-wrap lg:justify-between gap-4 relative cursor-pointer">
          <Image src="/assets/image/tablet_laptop_and_smartphone.png" alt="Check illustration" width={600} height={400} className="w-full sm:w-[31%] h-max" />

          <div className="flex flex-col  justify-center relative lg:left-[-50px] text-[15px] sm:text-[18px] lg:text-[22px]">
            <span className="flex text-black tracking-[1px]">お子さまの度数や保証書を
              <p className="bg-gradient-to-t from-[#F2DC00] from-72% to-transparent to-50% text-black font-mizolet tracking-[1px]">一括管理！</p>
            </span>

            <span className="text-[23px] sm:text-[30px] lg:text-[36px] text-black font-mizolet mt-1 sm:mt-4 mb-4 sm:mb-0 tracking-[1px]">
              親子で楽らくリンク機能
            </span>
          </div>

          <div className="flex flex-col  justify-center text-center absolute right-[25px] sm:right-[50px] top-[-25px]">
            <BoxMessage message='CHECK!' textColor="black"/>
          </div>

          {/* Button Arrow Right */}
          <div className="hidden lg:flex flex-col  justify-center text-center">
            <div className="h-[40px] w-[40px] sm:w-[47px] sm:h-[47px] rounded-full bg-black group-hover:bg-[#005D31] transition-colors duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
          {/* Button Arrow Corner Right*/}
          <div className="lg:hidden flex-col justify-center text-center absolute right-1.5 bottom-1.5 sm:right-2 sm:bottom-2">
            <div className="h-[40px] w-[40px] rounded-full bg-black group-hover:bg-[#005D31] transition-colors duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
              </svg>

            </div>
          </div>
        </div>
      </div>

      {/* Daily */}
       <div className="pt-[90px] sm:pt-[110px] xl:pt-[150px] bg-[#D4B688] rounded-t-[90px] sm:rounded-t-[130px] lg:rounded-t-[170px]">
        {/* Description */}
        <div className="grid sm:grid-cols-[1fr_1.5fr] md:grid-cols-[1fr_1fr] gap-4 sm:gap-6 lg:gap-10 mb-[10%] sm:mb-0 px-4 sm:px-[7%] md:px-[9%] xl:px-[12.5%] xl ">
          <div className="w-full sm:w-max md:w-full sm:flex sm:justify-center relative">
            <div className="text-[70px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[clamp(146px,1vw,12px)] text-center font-black text-white leading-[1] tracking-[10px]">
              DAILY
            </div>

            <Image 
              src="/assets/image/daily.png" 
              alt="Family illustration"
              width={600}
              height={400}
              zIndex={10}
              className="relative sm:absolute top-0 sm:top-[-10px] md:top-0 w-[70%] max-w-[350px] sm:max-w-[600px] mt-[-35px] sm:mt-[12%] left-[50%] transform -translate-x-1/2" 
            />
          </div>

          <div className="flex flex-col mt-[15px] sm:mt-[0%] xl:mt-[15%] w-full">
            <div className="flex w-full justify-center sm:justify-start items-center text-[20px] lg:text-[22px] tracking-[1px]"> 
              <span className="text-black flex items-center">日常使いで
                <p className="flex  justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">大</p>
                <p className="flex  justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">活</p>
                <p className="flex  justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">躍</p>
              </span>
            </div>

            {/* <div className="flex flex-wrap  justify-center mx-auto sm:hidden max-w-[200px] sm:w-full items-center text-[20px] sm:text-[22px] tracking-[1px]"> 
              <span className="text-black flex items-center">小さなお子様がいる</span>
              <span className="text-black flex items-center">家庭でも
                <p className="flex  justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">安</p>
                <p className="flex  justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">心</p>
              </span>
            </div> */}

            <div className="flex text-black text-[27px] mx-auto sm:mx-0 sm:text-[25px] md:text-[30px] lg:text-[36px] bg-white max-w-max px-[8px] py-[3px] sm:px-[14px] sm:py-[0px] mt-4.5 mb-7 tracking-[2px]">
              肌馴染みのいいフレーム
            </div>

            <div className="text-black tracking-[1px] max-w-[308px] sm:max-w-full mx-auto sm:mx-0 text-[13px] sm:text-[14px] leading-7">
              手元作業の多いオフィスワーク、スポーツ、ドライブなど、日常のシーンごとに複数のメガネを持っておくのもおすすめ。使用場面に適したメガネなら、目の負担を軽減し、より快適な視界を保つことができます。さらに、ファッションに合わせておしゃれを楽しんだり、仕事とプライベートの気持ちの切り替えをスムーズにする手助けに！
            </div>
          </div>
        </div>

        {/* Product */}
        <div className="mt-[40px] sm:mt-[70px] lg:mt-[90px] w-full px-4 sm:-[30px] md:-[50px] lg:px-[11.5%]">
          <div className="w-full max-w-[357px] md:max-w-none mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-2 rounded-2xl px-0 sm:px-2 lg:px-5 py-8 sm:py-5 bg-white">
            <ProductCard type='glasses' productName='John Dillinger' productCode='JD1045Z-4A C2 ゴールド' productImg='/assets/image/glasses_4.png' isFavorite bgColor="#B58741" productPrice='20,000'/>
            <ProductCard type='glasses' productName='ESSENTIAL' productCode='FC2035V-4A C2 ブラウン' productImg='/assets/image/glasses_5.png' isFavorite bgColor="#B58741" productPrice='8,000'/>
            <ProductCard type='glasses' productName='Graph Belle' productCode='GB1043G-4A C1 マットブラウン' productImg='/assets/image/glasses_6.png' isFavorite bgColor="#B58741" productPrice='10,000'/>
          </div>
        </div>

        {/* Option */}
        <div className="flex flex-wrap md:flex-nowrap py-15 px-5 lg:p-21 bg-[#C79F62] mt-[80px] sm:mt-[110px] justify-between">
          <div className="flex flex-col justify-center mx-auto md:mx-0 w-full md:w-max">
            <div className="flex flex-col justify-center text-center relative">
              <BoxMessage message='OPTION' textColor="black"/>
            </div>

            <p className="text-[26px] md:text-[30px] text-black text-center font-mizolet tracking-[1px] mt-8">おすすめオプション</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 mx-auto md:mx-0 mt-7 md:mt-0">
            <ButtonBox title="調光レンズ" message="紫外線によってレンズカラーが変化！日差しが強くなる季節も、1本2役で荷物にならず持ち運びも便利。" price="6,000" arrowDirection="right"/>
            <ButtonBox title="ニュアンスカラーレンズ" message="メガネをかけるだけで、目元を明るく、健康的な印象に！オフの日はもちろん忙しい朝のメイク代わりやコーデのアクセントに最適。" price="4,000" arrowDirection="right"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection