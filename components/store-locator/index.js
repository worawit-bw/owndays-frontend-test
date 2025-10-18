import StoreLocatorHeader from './StoreLocatorHeader'
import LocationSearch from './LocationSearch'
import StoreList from './StoreList'
import StoreMap from './StoreMap'
import { useState } from 'react'

const StoreLocatorIndex = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPrefecture, setSelectedPrefecture] = useState('')
  const [currentLocation, setCurrentLocation] = useState(null)
  const [viewMode, setViewMode] = useState('list') // 'list' or 'map'
  const [selectedStore, setSelectedStore] = useState(null)

  return (
    <div className="min-h-screen bg-white  mt-[110px] lg:mt-[130px]">
      <StoreLocatorHeader />
      
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10 py-8">
        <LocationSearch 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedPrefecture={selectedPrefecture}
          setSelectedPrefecture={setSelectedPrefecture}
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        
        <div className="flex gap-8 mt-8">
          {/* Store List */}
          <div className={`${viewMode === 'map' ? 'w-1/2' : 'w-full'} transition-all duration-300`}>
            <StoreList 
              searchQuery={searchQuery}
              selectedPrefecture={selectedPrefecture}
              currentLocation={currentLocation}
              selectedStore={selectedStore}
              setSelectedStore={setSelectedStore}
            />
          </div>
          
          {/* Map */}
          {viewMode === 'map' && (
            <div className="w-1/2">
              <StoreMap 
                searchQuery={searchQuery}
                selectedPrefecture={selectedPrefecture}
                selectedStore={selectedStore}
                setSelectedStore={setSelectedStore}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StoreLocatorIndex