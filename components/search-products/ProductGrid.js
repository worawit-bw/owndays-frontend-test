import { useState } from 'react'
import ProductCard from './ProductCard'

const ProductGrid = ({ filters, viewMode }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 24

  // Sample product data
  const sampleProducts = [
    {
      id: 1,
      name: 'AIR-1001',
      brand: 'AIR',
      price: 9900,
      originalPrice: null,
      category: 'メガネ',
      shape: 'ウェリントン',
      color: 'ブラック',
      material: 'アセテート',
      gender: 'ユニセックス',
      isNew: true,
      isPopular: false,
      isSale: false,
      rating: 4.5,
      reviewCount: 127,
      images: ['/images/products/air-1001-1.jpg', '/images/products/air-1001-2.jpg'],
      features: ['軽量', 'フィット感', 'UV保護'],
      description: '超軽量で快適な着け心地のクラシックウェリントン'
    },
    {
      id: 2,
      name: 'ESSENTIAL-2001',
      brand: 'ESSENTIAL',
      price: 7900,
      originalPrice: 9900,
      category: 'メガネ',
      shape: 'ボストン',
      color: 'ブラウン',
      material: 'アセテート',
      gender: 'メンズ',
      isNew: false,
      isPopular: true,
      isSale: true,
      rating: 4.3,
      reviewCount: 89,
      images: ['/images/products/essential-2001-1.jpg'],
      features: ['ベーシック', 'コスパ', 'シンプル'],
      description: 'デイリーユースに最適なベーシックボストン'
    },
    {
      id: 3,
      name: 'SUN-3001',
      brand: 'SUN',
      price: 12900,
      originalPrice: null,
      category: 'サングラス',
      shape: 'スクエア',
      color: 'ブラック',
      material: 'メタル',
      gender: 'ユニセックス',
      isNew: false,
      isPopular: true,
      isSale: false,
      rating: 4.7,
      reviewCount: 156,
      images: ['/images/products/sun-3001-1.jpg'],
      features: ['UV保護', 'スタイリッシュ', '偏光'],
      description: 'クールなスクエアフレームのサングラス'
    },
    {
      id: 4,
      name: 'JOHN DILLINGER-4001',
      brand: 'JOHN DILLINGER',
      price: 15900,
      originalPrice: null,
      category: 'メガネ',
      shape: 'ラウンド',
      color: 'ゴールド',
      material: 'メタル',
      gender: 'メンズ',
      isNew: true,
      isPopular: false,
      isSale: false,
      rating: 4.6,
      reviewCount: 203,
      images: ['/images/products/jd-4001-1.jpg'],
      features: ['クラシック', 'アメリカン', 'プレミアム'],
      description: 'クラシックアメリカンスタイルのラウンドフレーム'
    },
    {
      id: 5,
      name: 'MOVE-5001',
      brand: 'MOVE',
      price: 11900,
      originalPrice: null,
      category: 'メガネ',
      shape: 'スクエア',
      color: 'ネイビー',
      material: 'TR90',
      gender: 'ユニセックス',
      isNew: false,
      isPopular: false,
      isSale: false,
      rating: 4.4,
      reviewCount: 67,
      images: ['/images/products/move-5001-1.jpg'],
      features: ['スポーツ', '耐久性', 'アクティブ'],
      description: 'アクティブシーンに最適なスポーツフレーム'
    },
    {
      id: 6,
      name: 'OWNDAYS PC-6001',
      brand: 'OWNDAYS PC',
      price: 8900,
      originalPrice: 10900,
      category: 'メガネ',
      shape: 'ウェリントン',
      color: 'クリア',
      material: 'アセテート',
      gender: 'ユニセックス',
      isNew: false,
      isPopular: true,
      isSale: true,
      rating: 4.2,
      reviewCount: 234,
      images: ['/images/products/pc-6001-1.jpg'],
      features: ['ブルーライト', 'PC作業', '目の保護'],
      description: 'ブルーライトカット機能付きPCメガネ'
    }
  ]

  // Generate more products for demo
  const allProducts = []
  for (let i = 0; i < 100; i++) {
    const baseProduct = sampleProducts[i % sampleProducts.length]
    allProducts.push({
      ...baseProduct,
      id: i + 1,
      name: `${baseProduct.brand}-${(i + 1).toString().padStart(4, '0')}`
    })
  }

  // Filter products based on filters
  const filteredProducts = allProducts.filter(product => {
    if (filters.category !== 'すべて' && product.category !== filters.category) return false
    if (filters.shape && product.shape !== filters.shape) return false
    if (filters.color && product.color !== filters.color) return false
    if (filters.material && product.material !== filters.material) return false
    if (filters.gender && product.gender !== filters.gender) return false
    if (filters.brand && product.brand !== filters.brand) return false
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false
    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case '価格の安い順':
        return a.price - b.price
      case '価格の高い順':
        return b.price - a.price
      case '人気順':
        return b.rating - a.rating
      case '新着順':
      default:
        return b.isNew - a.isNew
    }
  })

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage)

  return (
    <div>
      {/* Results Info */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-600 font-light">
          {sortedProducts.length}件の商品 (ページ {currentPage} / {totalPages})
        </p>
      </div>

      {/* Products Grid/List */}
      <div className={`mb-8 ${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
          : 'space-y-4'
      }`}>
        {paginatedProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            viewMode={viewMode}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed font-light"
          >
            前へ
          </button>
          
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1
            if (page === 1 || page === totalPages || (page >= currentPage - 2 && page <= currentPage + 2)) {
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-light ${
                    currentPage === page
                      ? 'bg-gray-800 text-white'
                      : 'border border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {page}
                </button>
              )
            } else if (page === currentPage - 3 || page === currentPage + 3) {
              return <span key={page} className="px-2 text-gray-400">...</span>
            }
            return null
          })}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed font-light"
          >
            次へ
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductGrid