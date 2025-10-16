const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="max-w-[1440px] mx-auto py-8 px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">OWNDAYS</h3>
            <p className="text-sm text-gray-600">
              メガネ・サングラスの専門店
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">商品</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/products" className="hover:text-gray-900">メガネフレーム</a></li>
              <li><a href="/sunglasses" className="hover:text-gray-900">サングラス</a></li>
              <li><a href="/lenses" className="hover:text-gray-900">レンズ</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">サポート</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/store-locator" className="hover:text-gray-900">店舗検索</a></li>
              <li><a href="/contact" className="hover:text-gray-900">お問い合わせ</a></li>
              <li><a href="/faq" className="hover:text-gray-900">よくある質問</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">会社情報</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/about" className="hover:text-gray-900">OWNDAYSについて</a></li>
              <li><a href="/news" className="hover:text-gray-900">ニュース</a></li>
              <li><a href="/careers" className="hover:text-gray-900">採用情報</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} OWNDAYS Co., Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm !text-gray-600 hover:text-gray-900">プライバシーポリシー</a>
              <a href="/terms" className="text-sm !text-gray-600 hover:text-gray-900">利用規約</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;