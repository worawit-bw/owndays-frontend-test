const ProductFilters = ({ filters, setFilters }) => {
  const categories = [
    'すべて',
    'メガネ',
    'サングラス',
    'その他'
  ]

  const shapes = [
    'ウェリントン',
    'ボストン',
    'スクエア',
    'ラウンド',
    'オーバル',
    'フォックス',
    'ブロー'
  ]

  const colors = [
    'ブラック',
    'ブラウン',
    'グレー',
    'ネイビー',
    'レッド',
    'ブルー',
    'グリーン',
    'イエロー',
    'ピンク',
    'パープル',
    'クリア'
  ]

  const materials = [
    'アセテート',
    'メタル',
    'チタン',
    'TR90',
    'ウルテム',
    'カーボンファイバー'
  ]

  const genders = [
    'メンズ',
    'レディース',
    'ユニセックス',
    'キッズ'
  ]

  const brands = [
    'AIR',
    'ESSENTIAL',
    'SUN',
    'MOVE',
    'GRAPH BELLE',
    'JOHN DILLINGER',
    'SENICHI',
    'NICHE',
    'JUNNI',
    'OWNDAYS PC',
    'THE ONE'
  ]

  const FilterSection = ({ title, options, value, onChange, type = 'single' }) => (
    <div className="mb-6">
      <h3 className="text-sm font-light text-gray-800 mb-3 pb-2 border-b border-gray-100">
        {title}
      </h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center cursor-pointer group">
            <input
              type={type === 'single' ? 'radio' : 'checkbox'}
              name={title}
              value={option}
              checked={type === 'single' ? value === option : value.includes(option)}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            <div className={`w-4 h-4 border border-gray-300 rounded-sm flex items-center justify-center mr-3 transition-colors group-hover:border-gray-400 ${
              (type === 'single' ? value === option : value.includes(option))
                ? 'bg-gray-800 border-gray-800' 
                : 'bg-white'
            }`}>
              {(type === 'single' ? value === option : value.includes(option)) && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm text-gray-700 font-light group-hover:text-gray-900 transition-colors">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-light text-gray-800">フィルター</h2>
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
          リセット
        </button>
      </div>

      {/* Category */}
      <FilterSection
        title="カテゴリー"
        options={categories}
        value={filters.category}
        onChange={(value) => setFilters({...filters, category: value})}
      />

      {/* Shape */}
      <FilterSection
        title="フレーム形状"
        options={shapes}
        value={filters.shape}
        onChange={(value) => setFilters({...filters, shape: value})}
      />

      {/* Color */}
      <FilterSection
        title="カラー"
        options={colors}
        value={filters.color}
        onChange={(value) => setFilters({...filters, color: value})}
      />

      {/* Material */}
      <FilterSection
        title="素材"
        options={materials}
        value={filters.material}
        onChange={(value) => setFilters({...filters, material: value})}
      />

      {/* Gender */}
      <FilterSection
        title="性別"
        options={genders}
        value={filters.gender}
        onChange={(value) => setFilters({...filters, gender: value})}
      />

      {/* Brand */}
      <FilterSection
        title="ブランド"
        options={brands}
        value={filters.brand}
        onChange={(value) => setFilters({...filters, brand: value})}
      />

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-sm font-light text-gray-800 mb-3 pb-2 border-b border-gray-100">
          価格帯
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-600 font-light">
            <span>¥{filters.priceRange[0].toLocaleString()}</span>
            <span>¥{filters.priceRange[1].toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="0"
            max="25000"
            step="1000"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({
              ...filters, 
              priceRange: [filters.priceRange[0], parseInt(e.target.value)]
            })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-gray-500 font-light">最低価格</label>
              <input
                type="number"
                min="0"
                max={filters.priceRange[1]}
                value={filters.priceRange[0]}
                onChange={(e) => setFilters({
                  ...filters,
                  priceRange: [parseInt(e.target.value) || 0, filters.priceRange[1]]
                })}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 font-light">最高価格</label>
              <input
                type="number"
                min={filters.priceRange[0]}
                max="25000"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], parseInt(e.target.value) || 25000]
                })}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFilters