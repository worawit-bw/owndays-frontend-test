const StoreLocatorHeader = () => {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-light text-gray-800 mb-6">
            店舗検索
          </h1>
          <p className="text-xl lg:text-2xl text-gray-500 mb-8 max-w-4xl mx-auto font-light">
            お近くのOWNDAYS店舗を見つける
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            全国の店舗情報、営業時間、連絡先をご確認いただけます
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-light text-gray-800 mb-2">100+</div>
            <div className="text-sm text-gray-500 font-light">店舗数</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gray-800 mb-2">47</div>
            <div className="text-sm text-gray-500 font-light">都道府県</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gray-800 mb-2">12</div>
            <div className="text-sm text-gray-500 font-light">海外展開国</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoreLocatorHeader