const FeaturedBrands = () => {
  const featuredCollections = [
    {
      id: 1,
      title: '新作コレクション',
      description: '最新のトレンドを取り入れた新しいデザイン',
      brands: ['AIR', 'ESSENTIAL', 'SUN'],
      image: '/images/collections/new-collection.jpg'
    },
    {
      id: 2,
      title: '人気ランキング',
      description: 'お客様に最も選ばれているブランド',
      brands: ['JOHN DILLINGER', 'OWNDAYS PC', 'AIR'],
      image: '/images/collections/popular-ranking.jpg'
    },
    {
      id: 3,
      title: 'コラボレーション',
      description: '話題のキャラクターやブランドとのコラボモデル',
      brands: ['SQUID GAME', '10TH ANNIVERSARY', 'TOY STORY'],
      image: '/images/collections/collaboration.jpg'
    }
  ]

  const brandHighlights = [
    {
      title: '軽量フレーム',
      description: '一日中快適な着け心地',
      icon: '🪶',
      brands: ['AIR', 'MOVE']
    },
    {
      title: 'ブルーライトカット',
      description: 'デジタル機器から目を保護',
      icon: '💻',
      brands: ['OWNDAYS PC']
    },
    {
      title: 'UV保護',
      description: '紫外線から目をしっかりガード',
      icon: '☀️',
      brands: ['SUN', 'MOVE']
    },
    {
      title: 'キッズ向け',
      description: 'お子様の成長に合わせた安全設計',
      icon: '👶',
      brands: ['JUNNI']
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10">
        {/* Featured Collections */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-700 text-center mb-12">
            注目のコレクション
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCollections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 transition-all duration-300">
                  {/* Collection Image Placeholder */}
                  <div className="aspect-video bg-gray-50 flex items-center justify-center">
                    <div className="text-lg font-light text-gray-400 text-center px-4">
                      {collection.title}
                    </div>
                  </div>
                  
                  {/* Collection Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-light text-gray-800 mb-3 group-hover:text-gray-600 transition-colors">
                      {collection.title}
                    </h3>
                    
                    <p className="text-gray-500 mb-4 font-light leading-relaxed">
                      {collection.description}
                    </p>
                    
                    {/* Featured Brands */}
                    <div className="flex flex-wrap gap-2">
                      {collection.brands.map((brand, index) => (
                        <span key={index} className="text-xs bg-gray-50 text-gray-600 px-3 py-1 rounded-full border border-gray-100 font-light">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-700 text-center mb-12">
            ブランドの特徴
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                  <span className="text-3xl">{highlight.icon}</span>
                </div>
                
                <h3 className="text-lg font-light text-gray-800 mb-2">
                  {highlight.title}
                </h3>
                
                <p className="text-sm text-gray-500 mb-4 font-light">
                  {highlight.description}
                </p>
                
                {/* Associated Brands */}
                <div className="flex flex-wrap justify-center gap-1">
                  {highlight.brands.map((brand, brandIndex) => (
                    <span key={brandIndex} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100 font-light">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-lg p-12 border border-gray-100">
          <h2 className="text-2xl lg:text-3xl font-light text-gray-700 mb-4">
            あなたにぴったりのブランドを見つけよう
          </h2>
          
          <p className="text-lg text-gray-500 mb-8 font-light max-w-2xl mx-auto">
            豊富なブランドラインナップの中から、あなたのスタイルと機能のニーズに最適なメガネをお選びください
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-light">
              店舗で試着する
            </button>
            <button className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-gray-300 transition-colors duration-200 font-light">
              オンラインで購入
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBrands