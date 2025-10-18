const CompanyInfo = () => {
  const companyDetails = {
    headquarters: {
      name: "OWNDAYS Inc.",
      address: "〒900-0032 3rd fl.Gojinsha Naha Matsuyama bldg. 2-1-12, Matsuyama, Naha, Okinawa",
      capital: "JPY 100,000,000",
      ceo: "海山 武志"
    },
    thailand: {
      name: "OWNDAYS (THAILAND) CO., LTD.",
      website: "www.owndays.com/th/",
      address: "989 Siam Piwat Tower, 19th Floor, Unit B1, Rama 1 Road, Pathumwan, Pathumwan, Bangkok 10330",
      established: "2015年9月",
      business: "アイウェア小売事業"
    }
  }

  const values = [
    {
      icon: "👁️",
      title: "視界の品質",
      description: "生活の質を向上させる高品質なメガネとレンズの提供を目指しています"
    },
    {
      icon: "⚡",
      title: "イノベーション",
      description: "お客様のニーズに応える新しい技術とデザインを常に開発しています"
    },
    {
      icon: "🤝",
      title: "おもてなし",
      description: "細部まで心を込めた、最高品質のサービスを提供いたします"
    },
    {
      icon: "🌍",
      title: "アクセシビリティ",
      description: "高品質なメガネを手軽にアクセスできる価格で提供します"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10">
        {/* Company Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            企業理念
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-light">
            OWNDAYSは、アイウェア業界のリーダーとして最高のサービス提供を目指しています
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 group-hover:border-gray-200 transition-all duration-300">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Headquarters */}
          <div className="bg-gray-50 rounded-none p-8 border border-gray-100">
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              本社（日本）
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">会社名</h4>
                <p className="text-gray-600 text-sm">{companyDetails.headquarters.name}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">住所</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{companyDetails.headquarters.address}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">資本金</h4>
                <p className="text-gray-600 text-sm">{companyDetails.headquarters.capital}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">代表取締役社長</h4>
                <p className="text-gray-600 text-sm">{companyDetails.headquarters.ceo}</p>
              </div>
            </div>
          </div>

          {/* Thailand Office */}
          <div className="bg-white rounded-none p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              タイ法人
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">会社名</h4>
                <p className="text-gray-600 text-sm">{companyDetails.thailand.name}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">ウェブサイト</h4>
                <a 
                  href={`https://${companyDetails.thailand.website}`}
                  className="text-gray-900 hover:text-gray-600 transition-colors text-sm underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {companyDetails.thailand.website}
                </a>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">住所</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{companyDetails.thailand.address}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">設立</h4>
                <p className="text-gray-600 text-sm">{companyDetails.thailand.established}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">事業内容</h4>
                <p className="text-gray-600 text-sm">{companyDetails.thailand.business}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-none p-12 text-white">
            <h3 className="text-3xl font-light mb-6">
              ビジョン
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto font-light">
              「視力ケアの優れたサービスのリーダーとなり、
              誰もが高品質なメガネに簡単にアクセスできるようにし、
              印象的なショッピング体験を提供する」
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo