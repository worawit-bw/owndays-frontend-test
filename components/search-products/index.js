import SearchHeader from './SearchHeader'
import ProductFilters from './ProductFilters'
import ProductGrid from './ProductGrid'
import { useState } from 'react'

const SearchProductsIndex = () => {
  const [filters, setFilters] = useState({
    category: 'すべて',
    shape: '',
    color: '',
    material: '',
    gender: '',
    brand: '',
    priceRange: [0, 25000],
    sortBy: '新着順'
  })

  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="min-h-screen bg-white mt-[100px] lg:mt-[140px]">
      <SearchHeader 
        viewMode={viewMode}
        setViewMode={setViewMode}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        filters={filters}
        setFilters={setFilters}
      />
      
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 flex-shrink-0`}>
            <ProductFilters filters={filters} setFilters={setFilters} />
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid filters={filters} viewMode={viewMode} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchProductsIndex