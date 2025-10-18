const StoreCard = ({ store, isSelected, onClick }) => {
  const getDirections = (address) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  const callStore = (phone) => {
    window.open(`tel:${phone}`)
  }

  return (
    <div 
      className={`bg-white border rounded-lg p-6 transition-all duration-300 cursor-pointer hover:border-gray-200 ${
        isSelected ? 'border-gray-800 ring-2 ring-gray-100' : 'border-gray-100'
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-light text-gray-800">
              {store.name}
            </h3>
            
            {/* Status Badge */}
            <span className={`px-2 py-1 rounded-full text-xs font-light ${
              store.isOpen 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-gray-50 text-gray-600 border border-gray-200'
            }`}>
              {store.isOpen ? '営業中' : '営業時間外'}
            </span>
          </div>
          
          <p className="text-sm text-gray-500 font-light mb-1">
            {store.prefecture}
          </p>
          
          {store.distance && (
            <p className="text-sm text-gray-600 font-light">
              現在地から約 {store.distance.toFixed(1)}km
            </p>
          )}
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 ml-4">
          <button
            onClick={(e) => {
              e.stopPropagation()
              callStore(store.phone)
            }}
            className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:border-gray-300 hover:text-gray-800 transition-colors"
            title="電話をかける"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              getDirections(store.address)
            }}
            className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:border-gray-300 hover:text-gray-800 transition-colors"
            title="道順を見る"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Address */}
      <div className="mb-4">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            {store.address}
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm text-gray-600 font-light">{store.phone}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-gray-600 font-light">{store.hours}</span>
        </div>
      </div>

      {/* Services */}
      {store.services.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-light text-gray-700 mb-2">サービス:</h4>
          <div className="flex flex-wrap gap-1">
            {store.services.map((service, index) => (
              <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200 font-light">
                {service}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Features */}
      {store.features.length > 0 && (
        <div>
          <h4 className="text-sm font-light text-gray-700 mb-2">特徴:</h4>
          <div className="flex flex-wrap gap-1">
            {store.features.map((feature, index) => (
              <span key={index} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100 font-light">
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Expanded Details (when selected) */}
      {isSelected && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation()
                getDirections(store.address)
              }}
              className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors font-light text-sm"
            >
              道順を見る
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                callStore(store.phone)
              }}
              className="flex-1 border border-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:border-gray-300 transition-colors font-light text-sm"
            >
              電話をかける
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StoreCard