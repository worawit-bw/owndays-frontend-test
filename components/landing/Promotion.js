import Image from 'next/image'

const Promotion = () => {
  return (
    <div className="container max-w-[1440px] mx-auto">
      <div className="bg-promotion border-black border-2 rounded-xl py-8 px-4 mx-4 sm:py-10 sm:px-8 sm:mx-8 md:py-16 md:px-12 lg:py-21 lg:px-16 xl:px-23 xl:mx-[70px] max-w-[1300px]">
        {/* Infographic Header */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 sm:gap-7 lg:gap-10 mb-6 items-center">
          <div className="w-full px-4 max-w-[200px] xs:max-w-[250px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[379px]">
            <Image 
              src="/assets/image/date_promo.png" 
              alt="Promotion date" 
              width={349}
              height={200}
              className="w-full h-auto rounded-lg" 
            />
          </div>
          <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[592px]">
            <Image 
              src="/assets/image/info.png" 
              alt="Promotion information" 
              width={592}
              height={300}
              className="w-full h-auto rounded-lg" 
            />
          </div> 
        </div>

        {/* By 2 Discount */}
        <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[381px] mt-8 sm:mt-12 lg:mt-15 mx-auto">
          <Image 
            src="/assets/image/promo_buy2.png" 
            alt="Buy 2 promotion" 
            width={381}
            height={200}
            className="w-full h-auto rounded-lg" 
          />
        </div>

        {/* Description */}
        <div className="mt-6 sm:mt-9 lg:mt-12">
          <p className="text-base sm:text-lg lg:text-[23px] font-bold font-yu-gothic text-white text-center">まとめ買いがオトク！</p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start">
            <p className="text-base sm:text-lg lg:text-[23px] font-bold font-yu-gothic text-white text-center mt-2">家族・友達や恋人、自分買いでも複数本購入で、</p>
            <p className="text-base sm:text-lg lg:text-[23px] font-bold font-yu-gothic text-white text-center mt-2 bg-[#604C3F] px-1">2本目以降半額。</p>
          </div>
        </div>

        {/* Label */}
        <div className="w-full max-w-[922px] mx-auto mt-10">
          {/* Label First */}
          <div className="w-full bg-white border-4 p-6 px-4 xs:px-8 sm:px-10 md:px-8 rounded-4xl">
            <div className="flex flex-wrap text-black font-bold text-[16px] lg:text-[19px] justify-center tracking-[1px]">
              <p>例えば</p>
              <p>「12,000円」と「10,000円」の</p>
              <p>メガネをセットで購入する場合</p>
            </div>

            <div className="flex flex-wrap mx-1 mt-8 sm:mx-4 md:mx-6  items-center lg:flex-no-wrap xl:mx-12 justify-between">
              <div className='w-full h-[80px] mb-[15px] mx-auto md:mb-0 md:mx-0 md:w-[35%] lg:w-[41.8%] max-w-[296px] relative'>
                <Image 
                  src="/assets/image/glass_2_plus.png" 
                  alt="Two glasses"
                  fill
                  // className="w-full max-w-[296px]" 
                  style={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              </div>

              {/* Center Line */}
              {/* Vertical */}
              <div className="hidden md:flex h-[20px] w-full md:h-[95px] relative md:w-[12px]">
                <Image 
                  src="/assets/image/line_center_vertical.png" 
                  alt="Arrow"
                  width={20}
                  height={95}
                  style={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              </div>
              {/* Horizontal */}
              <div className="flex md:hidden h-[9px] w-full md:h-[95px] relative md:w-[12px]">
                <Image 
                  src="/assets/image/line_center_horizontal.png" 
                  alt="Arrow"
                  width={200}
                  height={10}
                  style={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              </div>

              <div className="flex flex-col flex-wrap w-full mt-[23px] md:mt-0 md:w-max md:flex-nowrap text-black font-bold items-center justify-center">
                <div className="flex flex-wrap items-center tracking-[1px] w-maxcontent md:flex-nowrap">
                  <p className="w-full md:w-max text-center text-[20px] md:text-[16px] lg:text-[22px]">2本目半額で</p>

                  <div className='flex flex-wrap w-full md:w-max md:flex-nowrap items-center justify-center'>
                    <p className="text-[38px] md:text-[30px] lg:text-[40px] text-red">¥5,000</p>
                    <p className="text-[20px] md:text-[16px] lg:text-[22px] text-red ml-2">がお得に！</p>
                  </div>
                </div>

                <p className="text-[13px] lg:text-[14px] font-bold font-yu-gothic">※お値段が低い商品からの割引となります。</p>
              </div>
            </div>
          </div>

          <p className="text-[20px] mt-7.5 lg:text-[23px] tracking-[1px] lg:mt-10 mx-17 text-center">この機会に、みんなで一緒にメガネを購入しよう！</p>

          {/* Label Second */}
          <div className="w-full bg-white border-4 py-[6%] px-[7%] rounded-4xl mt-12.5 lg:mt-17">
            <div className="grid sm:grid-cols-[1fr_2fr] gap-5 sm:gap-10">
              <div className="flex flex-col justify-center">
                <p className="text-center sm:text-left text-[40px] sm:text-[65px] font-bold text-red leading-[1.5] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black] tracking-[5px]">NOTE</p>
                <p className="text-center sm:text-left text-[12px] sm:text-[21px] text-black font-mizolet tracking-[2px]">注意事項</p>
              </div>

              <div className="flex flex-col">
                <ul className="text-black list-disc text-[13px] sm:text-[14px] font-medium">
                  <li className="leading-[2.1]">対象商品がなくなり次第終了です。</li>
                  <li className="leading-[2.1]">表示価格が低額の商品からの割引です。</li>
                  <li className="leading-[2.1]">2本目以降すべてのメガネ・サングラスが表示価格より半額となります。</li>
                  <li className="leading-[2.1]">6,000円(税込)以上のOWNDAYSオリジナルメガネ・サングラスが対象です。</li>
                  <li className="leading-[2.1]">オプションレンズ・セール商品・コラボ商品・レンズ交換・雑貨・修理等は対象外です。</li>
                  <li className="leading-[2.1]">他の割引との併用はできません。</li>
                  <li className="leading-[2.1]">本キャンペーンは予告なく変更・終了させていただく場合がございます。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Promotion;