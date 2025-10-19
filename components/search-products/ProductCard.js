import { useState } from 'react'

const ProductCard = ({ product, viewMode }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (viewMode === 'list') {
    return (
      <div className="bg-white border border-gray-100 rounded-lg p-6 hover:border-gray-200 transition-all duration-300">
        <div className="flex gap-6">
          {/* Product Image */}
          <div className="w-48 h-48 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 relative group">
            <div className="text-gray-400 text-center">
              <div className="text-lg font-light">{product.brand}</div>
              <div className="text-sm">{product.name}</div>
            </div>
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1">
              {product.isNew && (
                <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full font-light">
                  新着
                </span>
              )}
              {product.isPopular && (
                <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full font-light">
                  人気
                </span>
              )}
              {product.isSale && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-light">
                  セール
                </span>
              )}
            </div>

            {/* Favorite Button */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg 
                className={`w-4 h-4 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-light text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {product.brand}
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-light text-gray-800">
                  ¥{product.price.toLocaleString()}
                </div>
                {product.originalPrice && (
                  <div className="text-sm text-gray-400 line-through font-light">
                    ¥{product.originalPrice.toLocaleString()}
                  </div>
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-4 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.features.map((feature, index) => (
                <span key={index} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100 font-light">
                  {feature}
                </span>
              ))}
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 font-light mb-4">
              <div>
                <span className="text-gray-500">形状: </span>
                {product.shape}
              </div>
              <div>
                <span className="text-gray-500">カラー: </span>
                {product.color}
              </div>
              <div>
                <span className="text-gray-500">素材: </span>
                {product.material}
              </div>
              <div>
                <span className="text-gray-500">性別: </span>
                {product.gender}
              </div>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-600 font-light ml-1">
                  {product.rating}
                </span>
              </div>
              <span className="text-sm text-gray-500 font-light">
                ({product.reviewCount}件のレビュー)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors font-light">
                カートに追加
              </button>
              <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:border-gray-300 transition-colors font-light">
                詳細を見る
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grid view
  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 transition-all duration-300 group min-w-[300px] sm:min-w-[350px] w-full">
      {/* Product Image */}
      <div className="aspect-square bg-gray-50 flex items-center justify-center relative">
        <div className="text-gray-400 text-center px-4">
          <div className="text-base sm:text-lg font-light">{product.brand}</div>
          <div className="text-xs sm:text-sm">{product.name}</div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full font-light">
              新着
            </span>
          )}
          {product.isPopular && (
            <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full font-light">
              人気
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-light">
              セール
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg 
            className={`w-4 h-4 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Quick Action Buttons */}
        <div className="absolute bottom-3 left-2 right-2 sm:left-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-1 sm:gap-2">
            <button className="flex-1 bg-gray-800 text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded text-xs sm:text-sm hover:bg-gray-700 transition-colors font-light">
              カート追加
            </button>
            <button className="px-2 sm:px-3 py-1.5 sm:py-2 bg-white bg-opacity-90 text-gray-700 rounded text-xs sm:text-sm hover:bg-opacity-100 transition-colors font-light">
              詳細
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-light text-gray-800 mb-1 line-clamp-1 truncate">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-light">
              {product.brand}
            </p>
          </div>
          
          <div className="text-right ml-2 flex-shrink-0">
            <div className="text-sm sm:text-base font-light text-gray-800">
              ¥{product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="text-xs sm:text-sm text-gray-400 line-through font-light">
                ¥{product.originalPrice.toLocaleString()}
              </div>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-600 font-light ml-1">
            ({product.reviewCount})
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1">
          {product.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100 font-light">
              {feature}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="text-xs text-gray-400 font-light">
              +{product.features.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard