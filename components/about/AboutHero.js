import Image from 'next/image'

const AboutHero = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6">
              私たちについて
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
              アジアをリードするアイウェアブランド、1989年創業
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              高品質なメガネとレンズで、あらゆるライフスタイルにお応えします。
              アジア12カ国、オーストラリアに展開中。
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">
                  35+
                </div>
                <div className="text-sm text-gray-500">年の経験</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">
                  12
                </div>
                <div className="text-sm text-gray-500">カ国</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">
                  400+
                </div>
                <div className="text-sm text-gray-500">店舗</div>
              </div>
            </div>
          </div>
          
          {/* Logo/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="relative w-full h-full bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                <div className="text-4xl lg:text-6xl font-light text-gray-900 tracking-wider">
                  OWNDAYS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero