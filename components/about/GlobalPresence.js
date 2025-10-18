const GlobalPresence = () => {
  const countries = [
    {
      country: "日本",
      company: "OWNDAYS CO., LTD.",
      website: "www.owndays.com/jp/",
      address: "〒140-0002 東京都品川区東品川2-2-8 スフィアタワー天王洲 27F",
      established: "1989年3月",
      business: "アイウェア小売事業 / フランチャイズ",
      flag: "🇯🇵",
      highlight: true
    },
    {
      country: "タイ",
      company: "OWNDAYS (THAILAND) CO., LTD.",
      website: "www.owndays.com/th/",
      address: "989 Siam Piwat Tower, 19th Floor, Unit B1, Rama 1 Road, Pathumwan, Pathumwan, Bangkok 10330",
      established: "2015年9月",
      business: "アイウェア小売事業",
      flag: "🇹🇭",
      highlight: true
    },
    {
      country: "シンガポール",
      company: "OWNDAYS SINGAPORE PTE. LTD.",
      website: "www.owndays.com/sg/",
      address: "21 Merchant Road, #07-01, Singapore 058267",
      established: "2013年4月",
      business: "アイウェア小売事業",
      flag: "🇸🇬"
    },
    {
      country: "台湾",
      company: "OWNDAYS TAIWAN LTD.",
      website: "www.owndays.com/tw/",
      address: "14F., No.39,Sec. 1, Zhonghua Rd.,Zhongzheng Dist., Taipei City 100413,Taiwan (R.O.C.)",
      established: "2014年7月",
      business: "アイウェア小売事業",
      flag: "🇹🇼"
    },
    {
      country: "香港",
      company: "OWNDAYS HONG KONG LIMITED",
      website: "www.owndays.com/hk/",
      address: "21/F, Dorset House, Taikoo Place, 979 King's Road, Quarry Bay, Hong Kong",
      established: "2018年5月",
      business: "アイウェア小売事業",
      flag: "🇭🇰"
    },
    {
      country: "オーストラリア",
      company: "OWNDAYS DOWNUNDER PTY LTD",
      website: "www.owndays.com/au/",
      address: "-",
      established: "-",
      business: "アイウェア小売事業",
      flag: "🇦🇺"
    },
    {
      country: "フィリピン",
      company: "OWNDAYS PHILIPPINES",
      website: "www.owndays.com/ph/",
      address: "11A 3F 500 Shaw Zentrum, 500 Shaw Bldg., New Pleasant Hill, Mandaluyong City 1152",
      established: "2015年12月",
      business: "アイウェア小売事業",
      flag: "🇵🇭"
    },
    {
      country: "マレーシア",
      company: "OWNDAYS MALAYSIA SDN. BHD.",
      website: "www.owndays.com/my/",
      address: "VR2-5-5, V Residence 2, Lingkaran SV, Sunway Velocity, 55100 Kuala Lumpur",
      established: "2015年1月",
      business: "アイウェア小売事業",
      flag: "🇲🇾"
    },
    {
      country: "ベトナム",
      company: "OWNDAYS VIET NAM",
      website: "www.owndays.com/vn/",
      address: "L14-08B Floor 14, Vincom Center, 72 Le Thanh Ton St., Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
      established: "2015年10月",
      business: "アイウェア小売事業",
      flag: "🇻🇳"
    },
    {
      country: "インドネシア",
      company: "OWNDAYS INDONESIA",
      website: "www.owndays.com/id/",
      address: "Jl. Kartini 2 no 17 Jakarta 10710",
      established: "2017年9月",
      business: "アイウェア小売事業",
      flag: "🇮🇩"
    },
    {
      country: "カンボジア",
      company: "BRANCH OF OWNDAYS SINGAPORE PTE. LTD.",
      website: "www.owndays.com/kh/",
      address: "Suite S1-08 Ground Floor of Exchange Square Building, Street 106, Village 2, Sangkat Wat Phnom, Khan Daun Penh",
      established: "2015年9月",
      business: "アイウェア小売事業",
      flag: "🇰🇭"
    },
    {
      country: "アラブ首長国連邦",
      company: "OWNDAYS UAE",
      website: "www.owndays.com/ae/",
      address: "Bay Square 7, 103 - Downtown Dubai, UAE",
      established: "2021年",
      business: "アイウェア小売事業",
      flag: "🇦🇪"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            グローバル展開
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 font-light">
            OWNDAYSは、アジア、オーストラリア、中東の12カ国でサービスを提供しています
          </p>
          
          {/* Global Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">12</div>
              <div className="text-sm text-gray-500">カ国</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">400+</div>
              <div className="text-sm text-gray-500">店舗</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">10M+</div>
              <div className="text-sm text-gray-500">お客様</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">35+</div>
              <div className="text-sm text-gray-500">年</div>
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((location, index) => (
            <div 
              key={index} 
              className={`rounded-none p-6 transition-all duration-300 ${
                location.highlight 
                  ? 'bg-gray-50 border-2 border-gray-200' 
                  : 'bg-white border border-gray-100 hover:border-gray-200'
              }`}
            >
              {/* Country Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-xl mr-3">{location.flag}</span>
                  <h3 className="text-lg font-medium text-gray-900">
                    {location.country}
                  </h3>
                </div>
                {location.highlight && (
                  <span className="px-2 py-1 bg-gray-900 text-white text-xs font-medium">
                    主要
                  </span>
                )}
              </div>

              {/* Company Details */}
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 text-xs mb-1">会社名</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{location.company}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 text-xs mb-1">ウェブサイト</h4>
                  <a 
                    href={`https://${location.website}`}
                    className="text-gray-900 hover:text-gray-600 text-xs transition-colors underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {location.website}
                  </a>
                </div>

                {location.address !== "-" && (
                  <div>
                    <h4 className="font-medium text-gray-900 text-xs mb-1">住所</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{location.address}</p>
                  </div>
                )}

                {location.established !== "-" && (
                  <div>
                    <h4 className="font-medium text-gray-900 text-xs mb-1">設立</h4>
                    <p className="text-gray-600 text-xs">{location.established}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-medium text-gray-900 text-xs mb-1">事業内容</h4>
                  <p className="text-gray-600 text-xs">{location.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-none p-8 lg:p-12 border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-light mb-6 text-gray-900">
              お問い合わせ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-900">タイ本社</h4>
                <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                  989 Siam Piwat Tower, 19th Floor, Unit B1<br />
                  Rama 1 Road, Pathumwan, Bangkok 10330
                </p>
                <p className="text-gray-600 text-sm">
                  電話: <a href="tel:02-080-9454" className="text-gray-900 hover:text-gray-600 underline">02-080-9454</a>
                </p>
                <p className="text-gray-600 text-sm">営業時間: 9:30 - 18:30</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-900">SNS</h4>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.facebook.com/owndays.th/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm underline">
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/owndays_thailand/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm underline">
                    Instagram
                  </a>
                  <a href="https://page.line.me/nrk3847l" className="text-gray-600 hover:text-gray-900 transition-colors text-sm underline">
                    LINE
                  </a>
                  <a href="https://www.youtube.com/@owndaysthailand" className="text-gray-600 hover:text-gray-900 transition-colors text-sm underline">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence