const LocationSearch = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedPrefecture, 
  setSelectedPrefecture,
  currentLocation,
  setCurrentLocation,
  viewMode,
  setViewMode
}) => {
  const prefectures = [
    '',
    'バンコク都',
    'チョンブリー県',
    'ナコーンラーチャシーマー県',
    'チェンマイ県',
    'プーケット県',
    'サムットプラーカーン県',
    'ノンタブリー県',
    'パトゥムターニー県',
    'ナコーンパトム県',
    'ラヨーン県',
    'ウドーンターニー県',
    'コーンケーン県',
    'ソンクラー県',
    'チェンラーイ県',
    'スラーットターニー県',
    'ナコーンシータンマラート県',
    'プラナコーンシーアユッタヤー県',
    'ジャンタブリー県',
    'カーンジャナブリー県',
    'ラーチャブリー県',
    'プラジュワップキーリーカン県',
    'チャジューンサオ県',
    'ナコーンサワン県',
    'クラビー県',
    'サムットサーコーン県'
  ]

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        (error) => {
          console.error('位置情報の取得に失敗しました:', error)
        }
      )
    } else {
      console.error('このブラウザは位置情報をサポートしていません')
    }
  }

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6">
      {/* Search Controls */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {/* Text Search */}
        <div className="flex-1">
          <label className="block text-sm font-light text-gray-700 mb-2">
            店舗名・住所で検索
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="店舗名や住所を入力してください"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        {/* Prefecture Select */}
        <div className="lg:w-64">
          <label className="block text-sm font-light text-gray-700 mb-2">
            県で絞り込み
          </label>
          <select
            value={selectedPrefecture}
            onChange={(e) => setSelectedPrefecture(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <option value="">すべての県</option>
            {prefectures.slice(1).map(prefecture => (
              <option key={prefecture} value={prefecture}>
                {prefecture}
              </option>
            ))}
          </select>
        </div>

        {/* Current Location Button */}
        <div className="lg:w-auto">
          <label className="block text-sm font-light text-gray-700 mb-2">
            位置情報
          </label>
          <button
            onClick={getCurrentLocation}
            className="w-full lg:w-auto px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-light flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            現在地から検索
          </button>
        </div>
      </div>

      {/* View Mode & Results */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Current Location Status */}
        <div className="text-sm text-gray-500 font-light">
          {currentLocation ? (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              現在地を取得しました
            </span>
          ) : (
            '位置情報を取得すると、近くの店舗が表示されます'
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 font-light">表示モード:</span>
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 text-sm font-light transition-colors ${
                viewMode === 'list' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              リスト
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 text-sm font-light transition-colors ${
                viewMode === 'map' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              地図
            </button>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      {(searchQuery || selectedPrefecture) && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button
            onClick={() => {
              setSearchQuery('')
              setSelectedPrefecture('')
            }}
            className="text-sm text-gray-500 hover:text-gray-700 font-light"
          >
            検索条件をクリア
          </button>
        </div>
      )}
    </div>
  )
}

export default LocationSearch