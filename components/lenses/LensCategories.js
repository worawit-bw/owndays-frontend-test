import { useState } from 'react'

const LensCategories = () => {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filters = [
    'すべて',
    '釣り/スキー',
    'ドライブ/アウトドア', 
    '40代以上',
    '子供用',
    'PC/スマホ',
    'マスク着用者'
  ]

  const lensProducts = [
    {
      id: 1,
      name: '非球面高屈折率レンズ',
      price: '¥0〜¥3,000',
      category: 'Standard',
      badge: 'スタンダード',
      description: '薄型高品質レンズで、より鮮明な視界を提供します',
      features: ['UV99%カット', '反射防止', '傷防止', '汚れ防止'],
      refractive: '1.60, 1.67, 1.74',
      suitableFor: ['すべて']
    },
    {
      id: 2,
      name: 'エンハンスド遠近両用',
      price: '+¥3,000',
      category: 'Progressive',
      badge: 'オプション',
      description: '一つのレンズで遠くも近くも見える遠近両用レンズ',
      features: ['UV99%カット', '反射防止', '傷防止', '汚れ防止'],
      refractive: '1.60, 1.67',
      suitableFor: ['40代以上']
    },
    {
      id: 3,
      name: 'プレステージシグネチャー遠近両用',
      price: '+¥6,000',
      category: 'Progressive',
      badge: 'オプション',
      description: 'プレミアム遠近両用レンズ、最高の視界を提供',
      features: ['UV99%カット', '反射防止', '傷防止', '汚れ防止'],
      refractive: '1.60, 1.67',
      suitableFor: ['40代以上']
    },
    {
      id: 4,
      name: 'プレステージゴールド遠近両用',
      price: '+¥10,000',
      category: 'Progressive',
      badge: 'オプション',
      description: 'プレミアム遠近両用レンズ、中間視野が50%広く見える',
      features: ['UV99%カット', '反射防止', '傷防止', '汚れ防止'],
      refractive: '1.60, 1.67',
      suitableFor: ['40代以上']
    },
    {
      id: 5,
      name: 'プレステージアルティメット遠近両用',
      price: '+¥15,000',
      category: 'Progressive',
      badge: 'オプション',
      description: 'プレミアム遠近両用レンズ、個人の顔の構造に合わせて設計',
      features: ['UV99%カット', '反射防止', '傷防止', '汚れ防止'],
      refractive: '1.60, 1.67',
      suitableFor: ['40代以上']
    },
    {
      id: 6,
      name: 'PCレンズ（アイシールド）',
      price: '+¥3,000',
      category: 'PC',
      badge: 'オプション',
      description: 'パソコンやスマートフォン使用時のブルーライトから目を保護',
      features: ['UV99%カット', '傷防止', '汚れ防止', 'ブルーライト40%カット'],
      refractive: '1.60, 1.67',
      suitableFor: ['PC/スマホ', 'マスク着用者']
    },
    {
      id: 7,
      name: 'PCコンビネーションレンズ',
      price: '+¥3,000',
      category: 'PC',
      badge: 'オプション',
      description: 'ブルーライトカットとハニカム構造コーティングで光の散乱を軽減',
      features: ['UV99%カット', '反射防止', '傷防止', '汚れ防止', '光散乱軽減'],
      refractive: '1.60, 1.67',
      suitableFor: ['PC/スマホ', 'マスク着用者']
    },
    {
      id: 8,
      name: 'トランジションズレンズ',
      price: '+¥4,000',
      category: 'Transitions',
      badge: 'オプション',
      description: 'UV量に応じてレンズの色が変化、一つで眼鏡とサングラスの役割',
      features: ['UV99%カット', '反射防止', '傷防止', '汚れ防止'],
      refractive: '1.60, 1.67',
      suitableFor: ['ドライブ/アウトドア', 'すべて']
    },
    {
      id: 9,
      name: 'トランジションズダイナミックレンズ',
      price: '+¥6,000',
      category: 'Transitions',
      badge: 'オプション',
      description: 'あらゆるライフスタイルに対応する調光レンズ、8色から選択可能',
      features: ['UV99%カット', '反射防止', '傷防止', '汚れ防止'],
      refractive: '1.6/1.67',
      suitableFor: ['ドライブ/アウトドア', 'すべて']
    },
    {
      id: 10,
      name: '偏光レンズ',
      price: '+¥4,500',
      category: 'Polarized',
      badge: 'オプション',
      description: 'まぶしさを軽減し反射光をカット、アウトドア活動に最適',
      features: ['UV99%カット', '反射防止', '傷防止', '汚れ防止'],
      refractive: '1.60',
      suitableFor: ['釣り/スキー', 'ドライブ/アウトドア'],
      colors: ['スモーキーグレー', 'ブラウン', 'グリーン']
    },
    {
      id: 11,
      name: 'カラーレンズ',
      price: '¥2,000〜',
      category: 'Colored',
      badge: 'オプション',
      description: 'サングラス用レンズカラーをお好みで選択できます',
      features: ['UV99%カット', '反射防止', '傷防止', '汚れ防止'],
      refractive: '1.60, 1.67',
      suitableFor: ['釣り/スキー', 'ドライブ/アウトドア'],
      colorCategories: ['スピリットシェード', 'フローラルティント', 'シーズナルヒュー', 'ランドスケープトーン', 'シティバイブス']
    },
    {
      id: 12,
      name: '近視進行抑制レンズ',
      price: '+¥3,000',
      category: 'Myopia Control',
      badge: 'オプション',
      description: '6-12歳のお子様の近視進行を抑制するレンズ',
      features: ['UV99%カット', '反射防止', '傷防止', '汚れ防止'],
      refractive: '1.60',
      suitableFor: ['子供用']
    },
    {
      id: 11,
      name: 'เลนส์สี',
      price: 'From +THB 2,000',
      category: 'Colored',
      badge: 'Option',
      description: 'สนุกไปกับการเลือกสรรสีของเลนส์ให้กับแว่นตากันแดดด้วยตัวคุณเอง',
      features: ['ป้องกันยูวี99%', 'ลดแสงสะท้อน', 'กันรอยขูดขีด', 'ป้องกันฝุ่น'],
      refractive: '1.60, 1.67',
      suitableFor: ['Fishing/Skiing', 'Driving/Outdoor Activities'],
      colorCategories: ['Spirit Shades', 'Floral Tints', 'Seasonal Hues', 'Landscape Tones', 'City Vibes']
    },
    {
      id: 12,
      name: 'Myopia Control Lenses',
      price: '+THB 3,000',
      category: 'Myopia Control',
      badge: 'Option',
      description: 'เลนส์ช่วยชะลอสายตาสั้น สำหรับเด็กอายุ 6-12 ปี',
      features: ['ป้องกันยูวี99%', 'ลดแสงสะท้อน', 'กันรอยขูดขีด', 'ป้องกันฝุ่น'],
      refractive: '1.60',
      suitableFor: ['Kids']
    }
  ]

  const filteredProducts = activeFilter === 'すべて' 
    ? lensProducts 
    : lensProducts.filter(product => 
        product.suitableFor.includes(activeFilter)
      )

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-700 mb-4">
            レンズラインナップ
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            あなたのライフスタイルとニーズに最適なレンズをお選びください
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-light transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-gray-800 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-lg p-6 hover:border-gray-200 transition-all duration-300 group">
              {/* Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-light ${
                  product.badge === 'スタンダード' 
                    ? 'bg-gray-50 text-gray-600 border border-gray-200' 
                    : 'bg-gray-50 text-gray-600 border border-gray-200'
                }`}>
                  {product.badge}
                </span>
                <span className="text-lg font-light text-gray-700">
                  {product.price}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-light text-gray-800 mb-3 group-hover:text-gray-600 transition-colors">
                {product.name}
              </h3>
              
              <p className="text-gray-500 mb-4 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-light text-gray-700 mb-2">機能:</h4>
                <div className="flex flex-wrap gap-1">
                  {product.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Refractive Index */}
              <div className="mb-4">
                <span className="text-sm text-gray-500 font-light">
                  屈折率: {product.refractive}
                </span>
              </div>

              {/* Colors for specific products */}
              {product.colors && (
                <div className="mb-4">
                  <h4 className="text-sm font-light text-gray-700 mb-2">カラー:</h4>
                  <div className="flex gap-1">
                    {product.colors.map((color, index) => (
                      <span key={index} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Categories for lens colors */}
              {product.colorCategories && (
                <div className="mb-4">
                  <h4 className="text-sm font-light text-gray-700 mb-2">カラーカテゴリー:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.colorCategories.map((category, index) => (
                      <span key={index} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Suitable For */}
              <div>
                <h4 className="text-sm font-light text-gray-700 mb-2">おすすめ:</h4>
                <div className="flex flex-wrap gap-1">
                  {product.suitableFor.map((use, index) => (
                    <span key={index} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LensCategories