const LensDetails = () => {
  const comparisonData = [
    {
      title: '視界の違い',
      subtitle: '球面レンズ vs 非球面レンズ',
      description: '非球面レンズは視界の歪みが少なく、近視、遠視、乱視、度数の高い方でもクリアな視界を提供します'
    },
    {
      title: '厚さの違い',
      subtitle: '屈折率について',
      description: 'レンズが薄いほど、メガネの重量と視界の歪みが軽減されます'
    }
  ]

  const serviceInfo = [
    {
      title: 'レンズ交換サービス',
      description: 'どちらの店舗でご購入されたメガネでも、度数の変化やレンズの傷などがございましたら、OWNDAYS全店舗でレンズ交換を承ります',
      price: '¥1,990〜',
      link: '/services/lens-replacement'
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10">
        {/* Comparison Section */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-700 text-center mb-12">
            詳細情報
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {comparisonData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-light text-gray-800 mb-4">
                  {item.title}
                </h3>
                <h4 className="text-lg font-light text-gray-600 mb-4">
                  {item.subtitle}
                </h4>
                <p className="text-gray-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Features */}
        <div className="mb-16">
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-light text-gray-700 mb-6 text-center">
              OWNDAYSレンズ標準機能
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 border border-gray-100">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-light text-gray-700 mb-2">UV保護</h4>
                <p className="text-sm text-gray-500 font-light">99%</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 border border-gray-100">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-light text-gray-700 mb-2">反射防止</h4>
                <p className="text-sm text-gray-500 font-light">Anti-Reflective</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 border border-gray-100">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-light text-gray-700 mb-2">傷防止</h4>
                <p className="text-sm text-gray-500 font-light">Scratch Resistant</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 border border-gray-100">
                  <span className="text-2xl">🌪️</span>
                </div>
                <h4 className="font-light text-gray-700 mb-2">汚れ防止</h4>
                <p className="text-sm text-gray-500 font-light">Dust Protection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progressive Lens Benefits */}
        <div className="mb-16">
          <div className="bg-white border border-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6 text-center text-gray-700">
              遠近両用レンズ - 40歳以上の方におすすめ
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                  <span className="text-3xl">👁️</span>
                </div>
                <h4 className="font-light mb-2 text-gray-700">遠方視</h4>
                <p className="text-sm text-gray-500 font-light">遠くがクリア</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                  <span className="text-3xl">📱</span>
                </div>
                <h4 className="font-light mb-2 text-gray-700">中間視</h4>
                <p className="text-sm text-gray-500 font-light">パソコン作業に便利</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                  <span className="text-3xl">📖</span>
                </div>
                <h4 className="font-light mb-2 text-gray-700">近方視</h4>
                <p className="text-sm text-gray-500 font-light">読書がクリア</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Information */}
        <div>
          {serviceInfo.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 border border-gray-100">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div className="flex-1 mb-4 lg:mb-0">
                  <h3 className="text-2xl font-light text-gray-700 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-4 font-light">
                    {service.description}
                  </p>
                  <p className="text-lg font-light text-gray-700">
                    {service.price}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <a 
                    href={service.link}
                    className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-light"
                  >
                    詳しく見る
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LensDetails