const SearchHeader = ({ 
  viewMode, 
  setViewMode, 
  showFilters, 
  setShowFilters, 
  filters, 
  setFilters 
}) => {
  const sortOptions = [
    '新着順',
    '価格の安い順',
    '価格の高い順',
    '人気順'
  ]

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10 py-6">
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mb-2">
            全商品
          </h1>
          <p className="text-gray-500 font-light">
            OWNDAYSの豊富なメガネ・サングラスコレクションからお選びください
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          {/* Left Side - Filter Toggle & Results Count */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:border-gray-300 transition-colors font-light"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              フィルター
            </button>
            
            <span className="text-sm text-gray-500 font-light">
              1,234件の商品
            </span>
          </div>

          {/* Right Side - View Mode & Sort */}
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 font-light">並び順:</span>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white hover:border-gray-300 transition-colors font-light focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.category !== 'すべて' && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">
              {filters.category}
              <button
                onClick={() => setFilters({...filters, category: 'すべて'})}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          )}
          
          {filters.brand && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">
              {filters.brand}
              <button
                onClick={() => setFilters({...filters, brand: ''})}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          )}
          
          {(filters.category !== 'すべて' || filters.brand) && (
            <button
              onClick={() => setFilters({
                category: 'すべて',
                shape: '',
                color: '',
                material: '',
                gender: '',
                brand: '',
                priceRange: [0, 25000],
                sortBy: '新着順'
              })}
              className="text-sm text-gray-500 hover:text-gray-700 font-light"
            >
              すべてクリア
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchHeader