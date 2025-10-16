const Promotion = () => {
  return (
    <div className="container max-w-[1440px] mx-auto">
      <div className="bg-promotion border-black border-2 rounded-xl py-21 px-15 lg:py-21 lg:px-23 w-full mx-[70px] max-w-[1300px]">
        {/* Infographic Header */}
        <div className="flex justify-between gap-7 lg:gap-10 mb-6 place-items-center">
          <div className="w-100% max-w-[349px] place-items-center ml-5 mt-5">
            <img src="/assets/image/date_promo.png" alt="Promotion" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-100% max-w-[592px] mr-5">
            <img src="/assets/image/info.png" alt="Promotion" className="w-full h-auto rounded-lg" />
          </div> 
        </div>

        {/* By 2 Discount */}
        <div className="w-100% max-w-[381px] mt-15 mx-auto">
          <img src="/assets/image/promo_buy2.png" alt="Promotion" className="w-full h-auto rounded-lg" />
        </div>

        {/* Description */}
        <div className="mt-12">
          <p className="text-[20px] lg:text-[23px] font-bold font-yu-gothic text-white text-center text-sm lg:text-base mt-6">まとめ買いがオトク！</p>
          <div className="flex justify-center">
            <p className="text-[20px] lg:text-[23px] font-bold font-yu-gothic text-white text-center text-sm lg:text-base mt-2">家族・友達や恋人、自分買いでも複数本購入で、</p>
            <p className="text-[20px] lg:text-[23px] font-bold font-yu-gothic text-white text-center text-sm lg:text-base mt-2 bg-[#604C3F] pl-1">2本目以降半額。</p>
          </div>
        </div>

        {/* Label */}
        <div className="w-full max-w-[922px] mx-auto mt-10">
          {/* Label First */}
          <div className="w-full bg-white border-4 p-10 rounded-4xl">
            <div className="flex text-black font-bold text-[16px] lg:text-[19px] justify-center tracking-[1px]">
              <p>例えば</p>
              <p>「12,000円」と「10,000円」の</p>
              <p>メガネをセットで購入する場合</p>
            </div>

            <div className="flex mt-8 mx-10 justify-between">
              <img className="w-full max-w-[296px]" src="/assets/image/glass_2_plus.png" />

              {/* Center Line */}
              <div className="h-[95px] relative">
                <div className="w-[3px] h-full absolute top-0 left-0 bg-red" ></div>
                <img src="/assets/image/arrow.png" className="relative top-1/2 left-1/2 transform -translate-x-[55%] -translate-y-1/2  w-[10px] h-[10px]"/>
              </div>

              <div className="flex flex-col text-black font-bold items-center">
                <div className="flex items-center tracking-[1px]">
                  <p className="text-[20px] lg:text-[22px]">2本目半額で</p>
                  <p className="text-[38px] lg:text-[40px] text-red">¥5,000</p>
                  <p className="text-[20px] lg:text-[22px] text-red">がお得に！</p>
                </div>
                
                <p className="text-[13px] lg:text-[14px] font-yu-gothic">※お値段が低い商品からの割引となります。</p>
              </div>
            </div>
          </div>

          <p className="text-[20px] lg:text-[23px] tracking-[1px] mt-10 mx-17 text-center">この機会に、みんなで一緒にメガネを購入しよう！</p>

          {/* Label Second */}
          <div className="w-full bg-white border-4 py-13.5 px-16 rounded-4xl mt-17">
            <div className="grid grid-cols-[1fr_2fr] gap-10">
              <div className="flex flex-col justify-center">
                <p className="lg:text-[65px] font-bold text-red leading-[1.5] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black] tracking-[5px]">NOTE</p>
                <p className="lg:text-[21px] text-black font-mizolet tracking-[2px]">注意事項</p>
              </div>

              <div className="flex flex-col">
                <ul className="text-black list-disc text-[14px] font-medium">
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