const Terms = () => {
  const sections = [
    {
      id: 'general',
      title: '一般規約',
      content: [
        '本ウェブサイトにアクセスされた際、お客様は当社が個人情報管理者として、お客様のビジネス上の正当な利益のため、および/または購買契約を履行するための契約当事者として、お客様の個人情報を使用する必要があることをご理解いただいております。',
        'お客様は、このオンラインストアを通じて商品を注文するために、メンバー登録が必要です。当社は、お客様が登録されたメールアドレスを通じて登録情報を確認いたします。',
        '当社は、お客様が当社の定める条件に従わない場合、事前通知なしにお客様のアカウントを即座に停止または削除する権利を留保いたします。',
        '当社は、ウェブサイト上の規約および条件、その他の規約を事前通知なしに修正、変更、改変、または取消しする権利を留保いたします。'
      ]
    },
    {
      id: 'intellectual-property',
      title: '知的財産権',
      content: [
        'このウェブサイト上のすべての情報（テキスト、コンテンツ、ニュース、グラフィック、ロゴ、レイアウト形式、商品・サービスの価格を含む）は、OWNDAYS（タイランド）株式会社に完全に帰属します。',
        '当社からの書面による同意または法律で許可されている場合を除き、複製、改良、変更、配布、販売、編集、公開、その他の目的での保存を禁止します。',
        '違反が発見された場合、当社は法的措置を講じる権利を留保いたします。'
      ]
    },
    {
      id: 'account-password',
      title: 'アカウントとパスワード',
      content: [
        'お客様は、売買取引におけるコミュニケーションの利便性のため、正確で真実の詳細情報を提供することに同意されます。当社に提供された詳細情報に変更がある場合、お客様はウェブサイト上の「マイアカウント」を通じて情報を正確に更新することに同意されます。',
        'お客様が当社に提供された個人情報は、プライバシーポリシーに定められた方法で保存・使用されます。',
        'お客様は、個人情報とパスワードを機密として保持し、関係のない第三者に開示しないことが求められます。',
        'パスワードやアカウントを忘れた場合、当社は、この規定に準拠しない故意または過失による失敗に関連して生じるいかなる損失や損害についても、直接的または間接的な責任を負いません。'
      ]
    },
    {
      id: 'products',
      title: '商品について',
      content: [
        'このウェブサイトに表示されているすべての商品の画像と情報は、現状のまま表示されており、お客様に商品の特性を知らせることのみを目的としています。',
        '実際の商品のサイズ、品質、色は、ウェブサイト上に表示されているものと異なる場合があります。',
        '当社は、ウェブサイト上に表示される商品、商品詳細、価格、サイズを事前通知なしに変更する権利を留保いたします。',
        '当店では、配送前に商品の状態を十分に検査いたします。商品が破損または破壊されている場合は、直接確認のためカスタマーサービスセンターまでご連絡ください。'
      ]
    },
    {
      id: 'pricing-payment',
      title: '商品価格と支払い',
      content: [
        'このウェブサイトに表示されているすべての商品価格は、法律で定められた税率での付加価値税込み価格です。',
        'お客様は、クレジットカードまたはインターネットバンキング、その他当社が定める条件に従った方法で支払いができます。',
        'クレジットカードでの支払いの場合、カード名義人のみの注文に限定させていただきます。',
        'お客様は、システムに表示されている商品コードに従って完全かつ正確に支払いを行う必要があります。定められた期間内に支払いが完了しない、または不完全な場合、当社はお客様の注文をキャンセルする権利を留保いたします。',
        '当社は、ウェブサイト上に表示される商品価格、割引、配送料、その他の費用を事前通知なしに変更する権利を留保いたします。ただし、当社が既に確認した注文に対しては遡及的な影響はありません。',
        'ギフトカード、割引クーポン、ポイントは現金との交換や払い戻しはできません。'
      ]
    },
    {
      id: 'order-cancellation',
      title: '注文のキャンセル',
      content: [
        '在庫がない、またはその他の理由により当社がお客様の注文を受け付けることができない場合、当社はお客様の注文をキャンセルする場合があります。',
        '当社は、問題をお客様にお知らせし、返金または代替商品を手配いたします。',
        '当社が定める条件に従わない不正な取引であることが判明した場合、当社は即座に注文をキャンセルする権利を留保いたします。'
      ]
    },
    {
      id: 'shipping',
      title: '商品配送',
      content: [
        'お客様の個人情報について、当社は購買契約を履行するため、お客様の住所に商品を配送するために、配送業者にお客様の情報を送信する必要があります。当社は、配送業者がお客様の個人情報を機密として保持するよう手配いたします。',
        '商品は、お客様が商品代金を完全に支払った後にのみ配送されます。',
        '配送サービスはタイ国内のみです。配送サービス料金は当社の裁量によります。',
        '当社は、当社の管理外にある配送会社の過失による配送の遅延および/または損害について責任を負いません。',
        '商品またはサービスがお客様に配送された後の紛失または損害について、当社は責任を負いません。',
        '当社が予定時刻に商品を配送できない場合、電話および/またはメールでお客様にご連絡いたします。',
        '自然災害/暴動/抗議/テロリズムまたは当社の合理的な管理外のその他の影響による不可抗力の場合、当社は配送約定の遅延または履行不能について責任を負いません。'
      ]
    },
    {
      id: 'exchange-return',
      title: '商品の交換・返品',
      content: [
        '商品受領から30日以内に商品を検査し、破損、注文ミス、または不完全な場合は当社にお知らせください。以下の理由でお客様は商品の交換を要求できます：',
        '• 配送パッケージが凹み、破れ、不完全、開封済み、または配送会社から受け取る前に商品が開封されている場合',
        '• 商品が間違ったモデル、色で配送された、またはウェブサイト上に記載されている商品と一致しない場合',
        '• 商品に欠陥があり使用できない場合',
        '以下の場合、交換/返品は受け付けません：',
        '• セール商品、条件付き特別プロモーション商品',
        '• 商品受領から30日を超えて返品された商品',
        'お客様は、オンラインおよび全国のすべての店舗で商品の交換を要求できます。商品が完全な状態でのみ交換可能です。お客様は返送費用を負担する必要があります（当社の過失による交換の場合を除く）。',
        '商品交換は、1人のお客様につき1回のみに制限されます。お客様は、当社に完全な状態の商品を返品する必要があります。',
        '選択された新しい商品の価値が高い場合、お客様は差額を支払う必要があります。'
      ]
    },
    {
      id: 'refund',
      title: '返金',
      content: [
        '当社は返金ポリシーを設けておりません。選択された新しい商品の価値が低い場合でも、配送前に損害または紛失が証明された場合のみ例外とします。返金は、お客様が商品注文時に行った支払い方法によります。',
        'クレジットカードでの支払いの場合、当社は商品代金をお客様が商品購入に使用されたクレジットカードアカウントの与信枠に返金いたします。お客様のカード発行銀行の請求サイクルに応じて、約15-30営業日かかります。',
        'インターネットバンキングでの支払いの場合、当社は商品代金をお客様が指定された銀行口座に返金いたします。約7-15営業日かかります。',
        '当社は、お客様が支払われた金額に従って返金いたします。お客様の購入にて配送料が含まれている場合、当社は支払い方法に従って配送料を商品代金と合わせて返金いたします。',
        'スタッフは、メールまたは電話で進捗状況をお知らせいたします。',
        '当社は、上記の条件に従って商品が返品された場合のみ返金を処理いたします。'
      ]
    },
    {
      id: 'points-system',
      title: 'ポイントシステム',
      subsections: [
        {
          title: '一般規約',
          content: [
            'ポイントとクーポンは、店舗およびオンラインストアの利用規約に同意されたお客様のみを対象としたサービスです。'
          ]
        },
        {
          title: 'ポイントの蓄積',
          content: [
            'お客様は、当社が定める基準と標準に従ってポイントを獲得できます。',
            'ポイントの蓄積は、各種割引やクーポンを差し引いた純購入額から計算されます。端数は積立ポイントとして計算されません。',
            'ポイントは、支払いが完了したアカウントのみに付与されます。',
            'ポイントは現金に交換または変換することはできません。',
            'ポイントの有効期限は受領日から1年です。この期限を過ぎると、期限切れのポイントは使用できなくなります。'
          ]
        },
        {
          title: 'ポイントの使用',
          content: [
            '当社が定める条件に従って、商品代金の全額または一部の支払いにポイントを使用できます。付加価値税込みの購入額からの割引として使用されます。',
            'ポイントは割引として使用でき、1ポイント = 1バーツで、定められた条件の下で次回購入時の割引として使用できます。',
            'ポイントが使用されると、いかなる場合でもキャンセルすることはできません。',
            'ポイントはメンバーの資産ではなく、他人に譲渡または権利移転することはできません。交換されたポイントは、いかなる場合でも返却、変更、またはキャンセルすることはできません。',
            'ポイントとクーポンは、タイ国内でのみ使用できます。'
          ]
        },
        {
          title: 'プロモーション',
          content: [
            '当社がメンバーに提供するマーケティングポリシーと特典は、メンバーの購入履歴に応じて異なる場合があります。',
            '商品購入の割引としてポイントを使用する場合、割引クーポンやウェブサイト上に通常表示される商品の通常割引以外の他の販売促進からの割引との併用はできません。期限切れのポイントは自動的にユーザーアカウントから差し引かれます。'
          ]
        },
        {
          title: '変更・キャンセル',
          content: [
            '当社は、詐欺、不正、偽造、または当社の規約および条件に従わずにポイントを取得するための行為が発見された場合、ポイントをキャンセルおよび/または回収し、賞品を回収し、またはメンバーシップを取り消す権利を留保いたします。',
            '当社は、事前通知なしにポイントの蓄積と使用に関する規則と詳細を変更する権利を留保いたします。ただし、これらの規則は遡及的効力を持ちません。',
            '紛争または議論がある場合、当社の判断を最終とします。'
          ]
        }
      ],
      additionalNote: 'OWNDAYS ポイントは、OWNDAYS（タイランド）株式会社内でのみ商品サービスの蓄積/交換に使用できます。'
    },
    {
      id: 'jurisdiction',
      title: '適用範囲',
      content: [
        '上記のすべての規約および条件は、タイ法の管轄下および解釈の下にあります。'
      ]
    },
    {
      id: 'customer-service',
      title: 'カスタマーサービス',
      content: [
        'ウェブサイトの使用に問題がある場合、商品やサービスについてサポートが必要な場合、または当社に対する苦情、アドバイス、提案がある場合は、以下までご連絡ください：'
      ],
      contactInfo: {
        email: 'info.th@owndays.com',
        phone: '02-080-9454',
        hours: '営業時間：9:30 - 18:30'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white mt-[110px] lg:mt-[130px]">
      {/* Header */}
      <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
        <div className="container max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-800 mb-6">
              利用規約
            </h1>
            <p className="text-xl lg:text-2xl text-gray-500 mb-8 max-w-4xl mx-auto font-light">
              サービス利用規約
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              OWNDAYS（タイランド）株式会社のサービス利用に関する規約です
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.732 0L4.138 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-800 mb-2">重要なお知らせ</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-3">
                  OWNDAYS オンラインストアは、OWNDAYS（タイランド）株式会社により運営・所有されています。
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  ウェブサイトから商品をご注文いただく前に、以下の規約および条件を詳しくお読みください。お客様ご自身の利益のためです。当社のウェブサイトを通じて商品をご注文いただいた場合、当社はお客様がすべての売買条件に同意されたものとみなします。
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-light text-sm">
                ただし、この利用規約に同意せず、賛同いただけない場合は、直ちに当社プラットフォームの使用を拒否してください。
              </p>
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
                  
                  {/* Regular content */}
                  {section.content && (
                    <div className="space-y-4 mb-6">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-600 font-light leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Subsections (for points system) */}
                  {section.subsections && (
                    <div className="space-y-8">
                      {section.subsections.map((subsection, sIndex) => (
                        <div key={sIndex} className="pl-4 border-l-2 border-gray-100">
                          <h3 className="text-lg font-light text-gray-800 mb-4">
                            {subsection.title}
                          </h3>
                          <div className="space-y-3">
                            {subsection.content.map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-gray-600 font-light leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Additional note */}
                  {section.additionalNote && (
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-800 font-light text-sm">
                        {section.additionalNote}
                      </p>
                    </div>
                  )}

                  {/* Contact info */}
                  {section.contactInfo && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <h3 className="text-lg font-light text-gray-800 mb-4">連絡先</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-600 font-light">メール: {section.contactInfo.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-gray-600 font-light">電話: {section.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-600 font-light">{section.contactInfo.hours}</span>
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
              最終更新日: 2018年4月
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

export default Terms