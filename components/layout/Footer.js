import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="max-w-[1440px] mx-auto py-8 px-10">
       
        
        {/* Bottom Bar */}
        <div className="">
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