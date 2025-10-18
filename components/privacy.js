const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'scope',
      title: '本ポリシーの範囲と目的',
      content: [
        'OWNDAYS（タイランド）株式会社（以下「当社」）は、商品を購入またはサービスを利用するお客様（以下「お客様」）の個人情報保護の重要性を認識しています。',
        '当社は、個人情報保護法（B.E. 2562）に従い、お客様の個人情報保護ポリシーを策定いたします。',
        '本ポリシーは、当社のサービス提供に関するお客様の個人情報の収集、使用、開示方法について説明することを目的としています。'
      ]
    },
    {
      id: 'definitions',
      title: '定義',
      content: [
        '「個人情報」とは、直接的または間接的にお客様を特定できる情報を指し、故人の情報、法人情報、または個人を特定できないよう処理された情報は含まれません。',
        '「機微な個人情報」とは、人種、民族、政治的意見、信念、宗教、哲学に関する個人情報、生体情報、遺伝情報、性生活に関する情報、健康情報、刑事情報、または同様にお客様に影響を与える可能性のある情報を指します。',
        '「個人情報の処理」とは、個人情報に対する収集、使用、開示、削除などの全ての操作を指します。'
      ]
    },
    {
      id: 'controller',
      title: '個人情報管理者',
      content: [
        '当社は、お客様の個人情報の「管理者」として、お客様の個人情報の処理および安全性の維持に責任を負います。',
        '個人情報の処理は、サービス提供に必要な範囲でのみ行われ、法律で定められた目的、範囲、方法に従って実施されます。'
      ]
    },
    {
      id: 'collection',
      title: '収集する個人情報',
      content: [
        '当社のサービスへのアクセスおよび利用には、お客様を特定し、商品やサービスに関連する個人情報の提供が必要です。',
        '当社が直接お客様から収集する個人情報には、データベースシステムに記録された情報が含まれます：氏名、生年月日、電話番号、メールアドレス、住所、IPアドレス、その他類似情報。'
      ]
    },
    {
      id: 'purpose',
      title: '個人情報使用の目的',
      content: [
        '当社は、商品購入およびアフターサービスに関連する事業目的のために、お客様の個人情報を使用します。',
        '個人情報の処理は、以下の法的根拠に基づいて行われます：',
        '• 契約履行：購買契約に基づく処理で、お客様が交換、返品、アフターサービスの権利を行使できるようにするため',
        '• 同意：マーケティング、販売促進、統計、調査、分析、研究、またはその他の法的に禁止されていない目的のために、お客様から同意を得て処理'
      ]
    },
    {
      id: 'minors',
      title: '未成年者・制限能力者からの同意',
      content: [
        '• 10歳以下の未成年者：法的代理権を持つ保護者から同意を得る',
        '• その他の未成年者：民商法第22条、23条、24条に該当する場合、単独で同意可能。それ以外は保護者の同意が必要',
        '• 制限能力者：後見人から同意を得る',
        '• 準制限能力者：保佐人から同意を得る'
      ]
    },
    {
      id: 'disclosure',
      title: '第三者への情報開示',
      content: [
        '当社は、契約上の義務や法的義務の履行、またはお客様の同意に基づいて、必要な範囲で第三者に個人情報を開示することがあります。',
        'ウェブサイトおよび決済システムは、お客様の便宜とサービス向上のため、他のウェブサイトやサービスへのリンクを提供する場合があります。',
        '決済に関する情報（クレジットカード番号、発行銀行、有効期限など）は、第三者決済システムを通じて保存・確認され、当社のサーバーには恒久的に保存されず、確認後直ちに削除されます。'
      ]
    },
    {
      id: 'rights',
      title: '個人情報に関するお客様の権利',
      content: [
        'お客様は、法律および規則の定めにより、以下の権利を有します：',
        '• 情報を受ける権利：個人情報の処理、収集方法、受領者、保存期間に関する通知を受ける権利',
        '• アクセス権：当社が管理するお客様の個人情報のコピーを受け取り、適法な処理が行われているかを確認する権利',
        '• データポータビリティ権：機械読み取り可能な形式でデータを受け取り、他社への自動転送を要求する権利',
        '• 異議申立権：個人情報の処理に対して異議を申し立てる権利',
        '• 削除権（忘れられる権利）：個人情報の削除、破棄、または匿名化を要求する権利',
        '• 処理制限権：個人情報の使用停止を要求する権利',
        '• 訂正権：不正確、不完全、古い個人情報の修正を要求する権利'
      ]
    },
    {
      id: 'consent',
      title: '同意の撤回',
      content: [
        'お客様が処理に対する同意を撤回したい場合は、書面で当社にご連絡ください。',
        '同意の撤回は、撤回前に適法に行われた個人情報の処理には影響しません。',
        '同意撤回により、プロモーション、新しいオファー、有益な情報の受信ができなくなる場合があります。',
        '同意撤回の場合、当社は30日以内、または法律で定められた期間内に最善の努力で対応いたします。'
      ]
    },
    {
      id: 'retention',
      title: '個人情報の保存期間',
      content: [
        '個人情報の最小限の保存という原則に従い、当社はお客様の個人情報を法的要件に従って必要な期間のみ保存します。',
        'お客様の個人情報は、最後の商品購入またはサービス利用から5年を超えて保存されません。',
        '保存期間終了後、当社はお客様の情報の安全のため、個人情報を削除または破棄します。'
      ]
    },
    {
      id: 'security',
      title: '個人情報保護方法',
      content: [
        '当社は、収集された個人情報が適切に保存されるよう、データの暗号化と個人情報処理の保護に十分なセキュリティ対策を講じます。',
        '当社は、サービスへのアクセス改善、高速化、プライバシー保護のため、クッキー、ウェブビーコン、その他の技術を使用する場合があります。',
        '当社は、お客様の信頼を重視し、物理的、管理的、技術的な適切な措置を講じて個人情報を最善に保護します。',
        'お客様におかれましては、不正アクセスを防ぎ個人情報を保護するため、パスワードを他人に開示しないようお願いします。'
      ]
    },
    {
      id: 'changes',
      title: 'プライバシーポリシーの変更',
      content: [
        '当社は、お客様の個人情報保護ポリシーを適宜見直すことがあります。',
        '変更がある場合、当社ウェブサイトおよび適切なチャネルを通じてお知らせします。'
      ]
    },
    {
      id: 'contact',
      title: 'お問い合わせ方法',
      content: [
        'お客様が権利を行使、同意を撤回、または当社の個人情報処理についてご質問がある場合は、以下までご連絡ください：'
      ],
      contactInfo: {
        phone: '02-080-9454',
        email: 'info.th@owndays.com',
        address: 'サイアムピワット タワー 19階 ユニットB1 989号 ラマ1通り パトゥムワン区 バンコク 10330'
      }
    },
    {
      id: 'complaints',
      title: '苦情申立',
      content: [
        'お客様の個人情報処理が個人情報保護法B.E. 2562に準拠していないと思われる場合、個人情報保護委員会事務局に苦情を申し立てる権利があります。'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white mt-[110px] lg:mt-[130px]">
      {/* Header */}
      <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
        <div className="container max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-800 mb-6">
              プライバシーポリシー
            </h1>
            <p className="text-xl lg:text-2xl text-gray-500 mb-8 max-w-4xl mx-auto font-light">
              個人情報保護方針
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              OWNDAYS（タイランド）株式会社の個人情報保護に関する方針です
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container max-w-4xl mx-auto px-5 lg:px-10">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-800 mb-2">重要なお知らせ</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  この条件と契約を詳細にお読みください。このプライバシーポリシーの条件と契約に同意いただけない場合は、当社のプラットフォームのご利用をお控えください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-5 lg:px-10">
          {/* Table of Contents */}
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-800 mb-6">目次</h2>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-gray-600 hover:text-gray-800 font-light text-sm py-2 px-3 rounded hover:bg-white transition-colors"
                  >
                    {index + 1}. {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={section.id} id={section.id} className="scroll-mt-8">
                <div className="bg-white border border-gray-100 rounded-lg p-8">
                  <h2 className="text-2xl font-light text-gray-800 mb-6 pb-4 border-b border-gray-100">
                    {index + 1}. {section.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 font-light leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.contactInfo && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <h3 className="text-lg font-light text-gray-800 mb-4">連絡先</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-gray-600 font-light">電話: {section.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-600 font-light">メール: {section.contactInfo.email}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <svg className="w-4 h-4 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-gray-600 font-light">住所: {section.contactInfo.address}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 font-light text-center">
              最終更新日: 2022年6月1日
            </p>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="ページトップへ戻る"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PrivacyPolicy