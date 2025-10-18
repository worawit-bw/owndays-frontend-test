const StoreMap = ({ 
  searchQuery, 
  selectedPrefecture, 
  selectedStore, 
  setSelectedStore 
}) => {
  // This is a placeholder for map integration
  // In a real application, you would integrate with Google Maps, Mapbox, or similar
  
  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden h-[600px] sticky top-8">
      {/* Map Header */}
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-lg font-light text-gray-800 mb-2">
          店舗マップ
        </h3>
        <p className="text-sm text-gray-500 font-light">
          地図上の店舗をクリックして詳細を表示
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="h-full bg-gray-50 flex items-center justify-center relative">
        <div className="text-center">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h4 className="text-lg font-light text-gray-700 mb-2">
            インタラクティブマップ
          </h4>
          <p className="text-gray-500 font-light max-w-xs">
            ここにGoogle MapsやMapboxなどの地図が表示されます
          </p>
        </div>

        {/* Map Controls Overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="bg-white border border-gray-200 p-2 rounded-lg shadow-sm hover:border-gray-300 transition-colors">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button className="bg-white border border-gray-200 p-2 rounded-lg shadow-sm hover:border-gray-300 transition-colors">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <button className="bg-white border border-gray-200 p-2 rounded-lg shadow-sm hover:border-gray-300 transition-colors">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>

        {/* Sample Store Markers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Bangkok markers */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <button 
              className={`w-3 h-3 rounded-full transition-all ${
                selectedStore?.prefecture === 'バンコク都' 
                  ? 'bg-gray-800 ring-4 ring-gray-200' 
                  : 'bg-red-500 hover:bg-red-600'
              }`}
              title="バンコク都の店舗"
            />
          </div>
          
          {/* Chiang Mai marker */}
          <div className="absolute top-1/4 left-2/5 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <button 
              className={`w-3 h-3 rounded-full transition-all ${
                selectedStore?.prefecture === 'チェンマイ県' 
                  ? 'bg-gray-800 ring-4 ring-gray-200' 
                  : 'bg-red-500 hover:bg-red-600'
              }`}
              title="チェンマイ県の店舗"
            />
          </div>
          
          {/* Phuket marker */}
          <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <button 
              className={`w-3 h-3 rounded-full transition-all ${
                selectedStore?.prefecture === 'プーケット県' 
                  ? 'bg-gray-800 ring-4 ring-gray-200' 
                  : 'bg-red-500 hover:bg-red-600'
              }`}
              title="プーケット県の店舗"
            />
          </div>
          
          {/* Pattaya marker */}
          <div className="absolute top-2/5 right-1/3 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <button 
              className={`w-3 h-3 rounded-full transition-all ${
                selectedStore?.prefecture === 'チョンブリー県' 
                  ? 'bg-gray-800 ring-4 ring-gray-200' 
                  : 'bg-red-500 hover:bg-red-600'
              }`}
              title="チョンブリー県の店舗"
            />
          </div>
        </div>
      </div>

      {/* Selected Store Info */}
      {selectedStore && (
        <div className="absolute bottom-4 left-4 right-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h4 className="font-light text-gray-800 mb-1">
                {selectedStore.name}
              </h4>
              <p className="text-sm text-gray-500 font-light mb-2">
                {selectedStore.prefecture}
              </p>
              <p className="text-xs text-gray-600 font-light">
                {selectedStore.hours}
              </p>
            </div>
            
            <button
              onClick={() => setSelectedStore(null)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex gap-2 mt-3">
            <button className="flex-1 bg-gray-800 text-white py-1 px-3 rounded text-xs hover:bg-gray-700 transition-colors font-light">
              道順
            </button>
            <button className="flex-1 border border-gray-200 text-gray-700 py-1 px-3 rounded text-xs hover:border-gray-300 transition-colors font-light">
              電話
            </button>
          </div>
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute top-16 left-4 bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
        <h5 className="text-sm font-light text-gray-800 mb-2">凡例</h5>
        <div className="flex items-center gap-2 text-xs text-gray-600 font-light">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span>OWNDAYS店舗</span>
        </div>
      </div>
    </div>
  )
}

export default StoreMap