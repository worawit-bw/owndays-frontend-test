import Link from 'next/link';

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
              <li><Link href="/products" className="hover:text-gray-900">メガネフレーム</Link></li>
              <li><Link href="/sunglasses" className="hover:text-gray-900">サングラス</Link></li>
              <li><Link href="/lenses" className="hover:text-gray-900">レンズ</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">サポート</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/store-locator" className="hover:text-gray-900">店舗検索</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900">お問い合わせ</Link></li>
              <li><Link href="/faq" className="hover:text-gray-900">よくある質問</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">会社情報</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-gray-900">OWNDAYSについて</Link></li>
              <li><Link href="/news" className="hover:text-gray-900">ニュース</Link></li>
              <li><Link href="/careers" className="hover:text-gray-900">採用情報</Link></li>
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
              <Link href="/privacy" className="text-sm !text-gray-600 hover:text-gray-900">プライバシーポリシー</Link>
              <Link href="/terms" className="text-sm !text-gray-600 hover:text-gray-900">利用規約</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;