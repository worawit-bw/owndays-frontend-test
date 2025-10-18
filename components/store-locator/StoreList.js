import { useState, useMemo } from 'react'
import StoreCard from './StoreCard'

const StoreList = ({ 
  searchQuery, 
  selectedPrefecture, 
  currentLocation, 
  selectedStore, 
  setSelectedStore 
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const storesPerPage = 10

  // Sample store data based on the website
  const allStores = [
    {
      id: 1,
      name: 'OWNDAYS セントラルワールド',
      prefecture: 'バンコク都',
      address: '4,4/1-4/2,4/4 セントラルワールド A206号室, 2階, ラーチャダムリー通り, パトゥムワン区, バンコク 10330',
      phone: '02-080-9454',
      hours: '10:00 - 22:00',
      services: ['カラーコンタクトレンズ', '視力検査'],
      coordinates: { lat: 13.7469, lng: 100.5398 },
      distance: null,
      isOpen: true,
      features: ['駐車場あり', 'BTSアクセス', '日本語対応']
    },
    {
      id: 2,
      name: 'OWNDAYS アイコンサイアム',
      prefecture: 'バンコク都',
      address: '299 アイコンサイアム 420号室 4階, ソイ・チャルーンナコン5, チャルーンナコン通り, クローントンサイ, クロンサン区, バンコク 10600',
      phone: '02-080-9454',
      hours: '10:00 - 22:00',
      services: ['カラーコンタクトレンズ', 'リモート視力検査'],
      coordinates: { lat: 13.7266, lng: 100.5090 },
      distance: null,
      isOpen: true,
      features: ['川沿い立地', '駐車場あり', '日本語対応']
    },
    {
      id: 3,
      name: 'OWNDAYS ゲイソン・ビレッジ プレミアムコンセプトストア',
      prefecture: 'バンコク都',
      address: '127 ゲイソンタワー L01-03およびL01-04号室, L01階, ラードダムリー通り, ルンピニー, パトゥムワン区, バンコク 10330',
      phone: '02-080-9454',
      hours: '10:00 - 22:00',
      services: ['カラーコンタクトレンズ', 'リモート視力検査'],
      coordinates: { lat: 13.7442, lng: 100.5420 },
      distance: null,
      isOpen: false,
      features: ['プレミアム店舗', 'BTS直結', '日本語対応']
    },
    {
      id: 4,
      name: 'OWNDAYS サイアムセンター',
      prefecture: 'バンコク都',
      address: '979 サイアムセンター M22号室, M階, ラマ1通り, パトゥムワン区, バンコク 10330',
      phone: '02-080-9454',
      hours: '10:00 - 22:00',
      services: ['カラーコンタクトレンズ', 'リモート視力検査'],
      coordinates: { lat: 13.7450, lng: 100.5340 },
      distance: null,
      isOpen: true,
      features: ['BTS直結', '若者向け', '日本語対応']
    },
    {
      id: 5,
      name: 'OWNDAYS ターミナル21 パタヤ',
      prefecture: 'チョンブリー県',
      address: '456,777,777/1 Moo 6 ターミナル21 パタヤ, 1階, 1019-1020号室, ナークルア, バンラムン, パタヤ, チョンブリー 20150',
      phone: '038-123-456',
      hours: '10:00 - 22:00',
      services: ['カラーコンタクトレンズ', 'リモート視力検査'],
      coordinates: { lat: 12.9286, lng: 100.8776 },
      distance: null,
      isOpen: true,
      features: ['リゾート地', '観光客対応', '日本語対応']
    },
    {
      id: 6,
      name: 'OWNDAYS セントラル・チェンマイ',
      prefecture: 'チェンマイ県',
      address: '211号室 2階. 99, 99/1, 99/2 Moo 4, ファーハム区, ムアンチェンマイ郡, チェンマイ 50000',
      phone: '053-123-456',
      hours: '10:00 - 21:00',
      services: ['カラーコンタクトレンズ', 'リモート視力検査'],
      coordinates: { lat: 18.7883, lng: 98.9853 },
      distance: null,
      isOpen: true,
      features: ['北部最大店', '観光地', '日本語対応']
    },
    {
      id: 7,
      name: 'OWNDAYS セントラル・プーケット・フロレスタ',
      prefecture: 'プーケット県',
      address: '199 Moo 4 セントラル・プーケット・フロレスタ, 219/6号室 2階, ウィチットソンクラン通り, プーケット市, プーケット 83000',
      phone: '076-123-456',
      hours: '10:00 - 22:00',
      services: ['カラーコンタクトレンズ', 'リモート視力検査'],
      coordinates: { lat: 7.8804, lng: 98.3923 },
      distance: null,
      isOpen: true,
      features: ['リゾート地', '観光客対応', '日本語対応']
    },
    {
      id: 8,
      name: 'OWNDAYS ザ・モール・コラート',
      prefecture: 'ナコーンラーチャシーマー県',
      address: '1242/2 ザ・モール・ショッピングセンター・ナコーンラーチャシーマー N202号室, 2階, ミッタパープ通り, ナイムアン, ナコーンラーチャシーマー 30000',
      phone: '044-123-456',
      hours: '10:00 - 21:00',
      services: ['カラーコンタクトレンズ'],
      coordinates: { lat: 14.9799, lng: 102.0977 },
      distance: null,
      isOpen: true,
      features: ['東北部拠点', '地域最大', 'タイ語対応']
    }
  ]

  // Calculate distance if current location is available
  const storesWithDistance = useMemo(() => {
    if (!currentLocation) return allStores

    return allStores.map(store => {
      const distance = calculateDistance(
        currentLocation.lat,
        currentLocation.lng,
        store.coordinates.lat,
        store.coordinates.lng
      )
      return { ...store, distance }
    }).sort((a, b) => a.distance - b.distance)
  }, [currentLocation])

  // Filter stores
  const filteredStores = storesWithDistance.filter(store => {
    const matchesSearch = !searchQuery || 
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesPrefecture = !selectedPrefecture || store.prefecture === selectedPrefecture
    
    return matchesSearch && matchesPrefecture
  })

  // Pagination
  const totalPages = Math.ceil(filteredStores.length / storesPerPage)
  const startIndex = (currentPage - 1) * storesPerPage
  const paginatedStores = filteredStores.slice(startIndex, startIndex + storesPerPage)

  // Calculate distance between two coordinates (Haversine formula)
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371 // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return R * c // Distance in kilometers
  }

  return (
    <div>
      {/* Results Header */}
      <div className="mb-6 pb-4 border-b border-gray-100">
        <h2 className="text-xl font-light text-gray-800 mb-2">
          検索結果
        </h2>
        <p className="text-sm text-gray-500 font-light">
          {filteredStores.length}件の店舗が見つかりました
          {currentLocation && ' (距離順に表示)'}
        </p>
      </div>

      {/* Store Cards */}
      <div className="space-y-4 mb-8">
        {paginatedStores.map((store) => (
          <StoreCard 
            key={store.id} 
            store={store}
            isSelected={selectedStore?.id === store.id}
            onClick={() => setSelectedStore(store)}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredStores.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-lg font-light text-gray-700 mb-2">
            店舗が見つかりませんでした
          </h3>
          <p className="text-gray-500 font-light">
            検索条件を変更して再度お試しください
          </p>
        </div>
      )}

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

export default StoreList