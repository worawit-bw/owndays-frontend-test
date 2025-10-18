import { useState } from 'react'

const BrandCategories = () => {
  const [activeCategory, setActiveCategory] = useState('すべて')

  const categories = [
    'すべて',
    'メガネ',
    'サングラス', 
    'キッズ',
    'コラボレーション',
    'プレミアム'
  ]

  const brands = [
    {
      id: 1,
      name: 'AIR',
      category: 'メガネ',
      description: '軽量で快適な着け心地を追求したシリーズ',
      image: 'https://www.owndays.com/storage/productLineSub/906a6648-aee8-4710-aed9-2e1ae68f5be9.webp',
      features: ['超軽量', '柔軟性', 'フィット感'],
      popular: true
    },
    {
      id: 2,
      name: 'ESSENTIAL',
      category: 'メガネ',
      description: 'ベーシックで使いやすいデイリーコレクション',
      image: 'https://www.owndays.com/storage/productLines/12871488-2287-48b2-a0ca-7209059524f5.webp',
      features: ['シンプル', 'ベーシック', 'コスパ'],
      popular: false
    },
    {
      id: 3,
      name: 'SUN',
      category: 'サングラス',
      description: 'スタイリッシュで機能的なサングラスシリーズ',
      image: 'https://www.owndays.com/storage/productLineSub/0060e477-0a48-435f-8886-0e0af679ebfd.webp',
      features: ['UV保護', 'スタイリッシュ', '高品質'],
      popular: true
    },
    {
      id: 4,
      name: 'MOVE',
      category: 'メガネ',
      description: 'アクティブなライフスタイルに対応するスポーツライン',
      image: 'https://www.owndays.com/storage/productLines/a1daa80a-2900-46cc-ac0f-6f75802bd255.webp',
      features: ['スポーツ', '耐久性', 'アクティブ'],
      popular: false
    },
    {
      id: 5,
      name: 'GRAPH BELLE',
      category: 'メガネ',
      description: '洗練されたデザインと上質な素材のプレミアムライン',
      image: 'https://www.owndays.com/storage/productLineSub/93a0fb21-d3ab-4941-bb3e-a48df1245dc5.webp',
      features: ['プレミアム', '洗練', '上質'],
      popular: false
    },
    {
      id: 6,
      name: 'JOHN DILLINGER',
      category: 'メガネ',
      description: 'クラシックなアメリカンスタイルにモダンな要素を加えたブランド',
      image: 'https://www.owndays.com/storage/productLineSub/3b5eb06a-0508-49d9-a28d-655b12c6dae6.webp',
      features: ['クラシック', 'アメリカン', 'モダン'],
      popular: true
    },
    {
      id: 7,
      name: 'SENICHI',
      category: 'メガネ',
      description: '日本の伝統的な美意識とモダンなデザインの融合',
      image: 'https://www.owndays.com/storage/productLineSub/879f280a-9c3f-41d0-9963-ac1b06cc802b.webp',
      features: ['日本製', '伝統', 'モダン'],
      popular: false
    },
    {
      id: 8,
      name: 'NICHE',
      category: 'メガネ',
      description: 'ユニークで個性的なデザインのスペシャルコレクション',
      image: 'https://www.owndays.com/storage/productLineSub/db577d0b-1c1b-4c76-a16b-eefc55ded16a.webp',
      features: ['ユニーク', '個性的', 'スペシャル'],
      popular: false
    },
    {
      id: 9,
      name: 'JUNNI',
      category: 'キッズ',
      description: 'お子様のための安全で可愛いデザインのキッズライン',
      image: 'https://www.owndays.com/storage/productLineSub/ea2e0c1f-cd0a-4e14-89b8-c9dcb12c9ba5.webp',
      features: ['キッズ', '安全', 'かわいい'],
      popular: false
    },
    {
      id: 10,
      name: 'K.MORIYAMA',
      category: 'プレミアム',
      description: 'デザイナー森山氏による限定コレクション',
      image: 'https://www.owndays.com/storage/productLineSub/0069fe09-636b-416d-88d0-b4ea0311c597.webp',
      features: ['デザイナー', '限定', 'アート'],
      popular: false
    },
    {
      id: 11,
      name: 'OWNDAYS PC',
      category: 'メガネ',
      description: 'デジタル機器使用時の目を保護するPCメガネ',
      image: 'https://www.owndays.com/storage/productLines/1a1ed744-f1a6-4526-9ce2-42b96649d67c.jpeg',
      features: ['ブルーライト', 'PC作業', '目の保護'],
      popular: true
    },
    {
      id: 12,
      name: 'THE ONE',
      category: 'プレミアム',
      description: '最高級素材と職人技による極上のメガネ',
      image: 'https://www.owndays.com/storage/productLines/4537562e-4fc5-425d-bd83-cd100449b466.webp',
      features: ['最高級', '職人技', '極上'],
      popular: false
    },
    {
      id: 13,
      name: '10TH ANNIVERSARY',
      category: 'コラボレーション',
      description: 'OWNDAYS 10周年記念限定コレクション',
      image: 'https://www.owndays.com/storage/productLines/d38fa4dd-7d7b-4d49-8999-bed0782a51da.webp',
      features: ['記念', '限定', 'アニバーサリー'],
      popular: true
    },
    {
      id: 14,
      name: 'LIVE LIFE',
      category: 'メガネ',
      description: '人生を楽しむためのライフスタイルブランド',
      image: 'https://www.owndays.com/storage/productLines/ee3bf22e-eade-40a6-a654-b700baf21365.webp',
      features: ['ライフスタイル', '楽しむ', 'ポジティブ'],
      popular: false
    },
    {
      id: 15,
      name: 'SQUID GAME',
      category: 'コラボレーション',
      description: '人気ドラマとのコラボレーション限定モデル',
      image: 'https://www.owndays.com/storage/productLineSub/f66f011b-8e22-4455-8156-78cad7f229d0.webp',
      features: ['コラボ', '限定', 'ドラマ'],
      popular: true
    },
    {
      id: 16,
      name: 'TOY STORY',
      category: 'コラボレーション',
      description: 'ディズニー・ピクサーとのコラボレーションモデル',
      image: 'https://www.owndays.com/storage/productLines/cd3d516e-7c3f-49c0-b7c6-f131b64ebfa4.webp',
      features: ['ディズニー', 'キャラクター', 'コラボ'],
      popular: false
    },
    {
      id: 17,
      name: 'POMPOMPURIN',
      category: 'コラボレーション',
      description: 'サンリオキャラクターとのかわいいコラボモデル',
      image: 'https://www.owndays.com/storage/productLineSub/73de0942-52a3-424e-a825-cc368780019d.webp',
      features: ['サンリオ', 'かわいい', 'キャラクター'],
      popular: false
    }
  ]

  const filteredBrands = activeCategory === 'すべて' 
    ? brands 
    : brands.filter(brand => brand.category === activeCategory)

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10">
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-light transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gray-800 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBrands.map((brand) => (
            <div key={brand.id} className="group cursor-pointer">
              <div className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 transition-all duration-300">
                {/* Brand Image Placeholder */}
                <div className="aspect-square bg-gray-50 flex items-center justify-center relative" style={{backgroundImage: `url(${brand.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="text-2xl font-light text-gray-400 text-center px-4">
                    {brand.name}
                    {console.log(brand)}
                  </div>
                  {brand.popular && (
                    <div className="absolute top-3 right-3 bg-gray-800 text-white text-xs px-2 py-1 rounded-full font-light">
                      人気
                    </div>
                  )}
                </div>
                
                {/* Brand Info */}
                <div className="p-6">
                  <h3 className="text-lg font-light text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">
                    {brand.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-4 font-light leading-relaxed">
                    {brand.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {brand.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100 font-light">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-light">
            すべてのブランドを見る
          </button>
        </div>
      </div>
    </section>
  )
}

export default BrandCategories