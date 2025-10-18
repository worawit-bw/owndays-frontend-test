const Timeline = () => {
  const milestones = [
    {
      year: "1989",
      title: "会社設立",
      description: "日本でOWNDAYSを設立、アイウェア事業を開始"
    },
    {
      year: "2013",
      title: "シンガポール進出",
      description: "シンガポールに初店舗開設、東南アジア展開を開始"
    },
    {
      year: "2014",
      title: "台湾進出",
      description: "台湾市場に参入、アジアでの顧客基盤を拡大"
    },
    {
      year: "2015",
      title: "タイ進出",
      description: "タイに初店舗開設、同時にマレーシア、フィリピン、ベトナムにも展開"
    },
    {
      year: "2017",
      title: "インドネシア進出",
      description: "インドネシアに事業拡大、東南アジアでの地位を強化"
    },
    {
      year: "2018",
      title: "香港進出",
      description: "香港市場に参入、アジアでのアクセスを拡大"
    },
    {
      year: "2021",
      title: "中東進出",
      description: "UAE（アラブ首長国連邦）に店舗開設、新市場への展開"
    },
    {
      year: "2025",
      title: "タイ10周年",
      description: "タイでの事業10周年を迎え、新たなイノベーションを展開"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container max-w-[1440px] mx-auto px-5 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            成長の軌跡
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            日本での創業から、アジアのアイウェアリーダーへの歩み
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-px bg-gray-200 h-full"></div>
          
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative mb-12 lg:mb-16 flex ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full z-10"></div>
              
              {/* Content */}
              <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
              }`}>
                <div className="bg-white rounded-none p-6 border border-gray-100">
                  {/* Year Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-gray-900 text-white font-medium text-sm mb-4">
                    {milestone.year}
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Vision */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-none p-8 lg:p-12 border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-light mb-4 text-gray-900">
              未来へ向けて
            </h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-600 font-light">
              今後も新しいイノベーションを開発し、サービスを拡大して、
              すべてのお客様に最高の視力ケア体験を提供してまいります。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline