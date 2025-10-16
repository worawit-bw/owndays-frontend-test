import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarAnimating, setIsSidebarAnimating] = useState(false);

  const openSearchModal = () => {
    setIsSearchOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeSearchModal = () => {
    setIsSearchOpen(false);
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
    setIsSidebarAnimating(true);
    document.body.style.overflow = 'hidden';
    // Small delay to trigger animation
    setTimeout(() => setIsSidebarAnimating(false), 10);
  };

  const closeSidebar = () => {
    setIsSidebarAnimating(true);
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsSidebarOpen(false);
      setIsSidebarAnimating(false);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        if (isSearchOpen) {
          closeSearchModal();
        }
        if (isSidebarOpen) {
          closeSidebar();
        }
      }
    };

    if (isSearchOpen || isSidebarOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isSearchOpen, isSidebarOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white lg:h-[116px] h-[96px]">
      <div className="border-1 border-b-gray-200">
        <div className="max-w-[1440px] mx-auto flex lg:grid justify-center grid-flow-col grid-cols-[0fr_1.5fr_0.5fr] w-full px-5 lg:px-10 lg:h-[80px] h-[60px]">
          {/* Desktop */}
          <div className="hidden lg:contents w-full w-100%">
            {/* Logo */}
            <div className="hidden lg:flex text-xl lg:text-2xl tracking-nav text-gray-900 font-normal  items-center font-outfit lg:mr-10 ">
              <Link href="/">OWNDAYS</Link>
            </div>

            {/* Menu List */}
            <ul className="hidden space-x-6 lg:flex">
              <li className="flex items-center">
                <Link href="/search-product" className="!text-gray-800 hover:!text-red font-normal">商品検索</Link>
              </li>
              <li className="flex items-center">
                <Link href="/brands" className="!text-gray-800 hover:!text-red font-normal">ブランド</Link>
              </li>
              <li className="flex items-center">
                <Link href="/lenses" className="!text-gray-800 hover:!text-red font-normal">レンズ</Link>
              </li>
              <li className="flex items-center">
                <Link href="/about" className="!text-gray-800 hover:!text-red font-normal">OWNDAYSについて</Link>
              </li>
              <li className="flex items-center">
                <Link href="/store-locator" className="!text-gray-800 hover:!text-red font-normal">店舗検索</Link>
              </li>
            </ul>

            {/* Profile */}
            <div className="hidden justify-end items-center lg:flex">
              <div class="flex items-center w-max">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-7 text-gray-800 group-hover:text-red transition-all duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span class="text-sm text-gray-700">0 pt(円相当)</span>
              </div>

              {/* Search */}
              <button className="cursor-pointer group pl-5" onClick={openSearchModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-7 text-gray-800 group-hover:text-red transition-all duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>

              {/* Favorite */}
              <button className="cursor-pointer group pl-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-7 text-gray-800 group-hover:text-red transition-all duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>

              {/* Cart */}
              <button className="cursor-pointer relative group pl-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-7 text-gray-800 group-hover:text-red transition-all duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

                <div className="absolute bottom-4 right-[-10px] bg-gray-500 rounded-full w-[20px] h-[20px] text-white text-xs flex items-center justify-center">4</div>
              </button> 
            </div>
          </div>

          {/* Mobile - Tablet */}
          <div className="flex lg:hidden w-full justify-between">
            <div className="flex items-center">
               <button className="cursor-pointer relative group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-6 text-gray-800 group-hover:text-red transition-all duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

                <div className="absolute bottom-3 right-[-10px] bg-gray-500 rounded-full w-[20px] h-[20px] text-white text-xs flex items-center justify-center">4</div>
              </button> 

                <button className="cursor-pointer group pl-5" onClick={openSearchModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-6 text-gray-800 group-hover:text-red transition-all duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>

            <div className="flex text-xl lg:text-2xl tracking-nav text-gray-900 font-normal  items-center font-outfit lg:mr-10 ">
              <Link href="/">OWNDAYS</Link>
            </div>

            <div className="flex justify-center">
              <button className="cursor-pointer group ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-800 group-hover:text-red transition-all duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </button>
              <button className="cursor-pointer relative pl-5 group" onClick={openSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-800  transition-all duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Navbar */}
      <div className="border-1 border-b-gray-200 ">
        <div className="max-w-[1440px] mx-auto h-8 flex items-center w-full px-5 lg:px-10">
          <nav className="text-xs lg:text-sm">
            <Link href="/" className="!text-gray-400 hover:!text-gray-800 font-light">メガネのOWNDAYS トップ</Link>
            <span className="mx-2 text-gray-400 font-light">&gt;</span>
            <Link href="/top" className="!text-gray-400 hover:!text-gray-800 font-light">ニュース</Link>
            <span className="mx-2 text-gray-400 font-light">&gt;</span>
            <Link href="/news" className="!text-gray-800 font-light">みんなメガネ割</Link>
          </nav>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-[9999] flex flex-col">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-200">
            {/* Mobile Back Button */}
            <button 
              onClick={closeSearchModal}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 flex-1 text-center md:text-left">商品検索</h2>
            
            {/* Desktop Close Button */}
            <button 
              onClick={closeSearchModal}
              className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search Content */}
          <div className="flex-1 p-4 md:p-6 max-w-4xl mx-auto w-full overflow-y-auto">
            {/* Search Input */}
            <div className="relative mb-6 md:mb-8">
              <input
                type="text"
                placeholder="商品名、ブランド名で検索..."
                className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg text-black placeholder-gray-500 border-2 border-gray-300 rounded-full focus:border-red focus:outline-none transition-colors"
                autoFocus
              />
              <button className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>

            {/* Quick Search Categories */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-900">カテゴリー</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                <button className="p-3 md:p-4 border border-gray-200 rounded-lg hover:border-red hover:bg-red/5 active:bg-red/10 transition-colors text-left cursor-pointer">
                  <div className="font-medium text-sm md:text-base text-red">メガネフレーム</div>
                  <div className="text-xs md:text-sm text-gray-500">すべてのフレーム</div>
                </button>
                <button className="p-3 md:p-4 border border-gray-200 rounded-lg hover:border-red hover:bg-red/5 active:bg-red/10 transition-colors text-left cursor-pointer">
                  <div className="font-medium text-sm md:text-base text-red">サングラス</div>
                  <div className="text-xs md:text-sm text-gray-500">UV カット</div>
                </button>
                <button className="p-3 md:p-4 border border-gray-200 rounded-lg hover:border-red hover:bg-red/5 active:bg-red/10 transition-colors text-left cursor-pointer">
                  <div className="font-medium text-sm md:text-base text-red">レンズ</div>
                  <div className="text-xs md:text-sm text-gray-500">交換・追加</div>
                </button>
                <button className="p-3 md:p-4 border border-gray-200 rounded-lg hover:border-red hover:bg-red/5 active:bg-red/10 transition-colors text-left cursor-pointer">
                  <div className="font-medium text-sm md:text-base text-red">アクセサリー</div>
                  <div className="text-xs md:text-sm text-gray-500">ケース・クリーナー</div>
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="pb-4">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-900">人気の検索</h3>
              <div className="flex flex-wrap gap-2">
                {['オークリー', '軽量フレーム', 'ブルーライトカット', '遠近両用', '度付きサングラス'].map((term) => (
                  <button 
                    key={term}
                    className="px-3 md:px-4 py-2 text-sm md:text-base bg-gray-100 text-gray-700 rounded-full hover:bg-red hover:text-white active:bg-red/80 transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Close Button at Bottom */}
            <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2">
              <button 
                onClick={closeSearchModal}
                className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sidebar Menu */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 bg-gray-100 z-[9998] lg:hidden transition-opacity duration-300 ease-out ${
              isSidebarOpen ? 'bg-opacity-50 opacity-100' : 'bg-opacity-0 opacity-0'
            }`}
            onClick={closeSidebar}
          ></div>
          
          {/* Sidebar */}
          <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[9999] transform transition-all duration-300 ease-out lg:hidden ${
            !isSidebarAnimating ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
          }`}>
            {/* Sidebar Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-xl font-normal text-gray-900 tracking-nav">OWNDAYS</h2>
              <button 
                onClick={closeSidebar}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="flex flex-col h-full">
              {/* Navigation Menu */}
              <nav className="flex-1 px-6 py-4">
                <ul className="space-y-1">
                  <li className={`transform transition-all duration-300 ease-out delay-75 ${
                    !isSidebarAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}>
                    <Link 
                      href="/search-product" 
                      className="flex items-center px-4 py-3 !text-gray-800 hover:bg-red hover:text-white hover:scale-105 rounded-lg transition-all duration-200"
                      onClick={closeSidebar}
                    >
                      商品検索
                    </Link>
                  </li>
                  <li className={`transform transition-all duration-300 ease-out delay-100 ${
                    !isSidebarAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}>
                    <Link 
                      href="/brands" 
                      className="flex items-center px-4 py-3 !text-gray-800 hover:bg-red hover:text-white hover:scale-105 rounded-lg transition-all duration-200"
                      onClick={closeSidebar}
                    >
                      ブランド
                    </Link>
                  </li>
                  <li className={`transform transition-all duration-300 ease-out delay-150 ${
                    !isSidebarAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}>
                    <Link 
                      href="/lenses" 
                      className="flex items-center px-4 py-3 !text-gray-800 hover:bg-red hover:text-white hover:scale-105 rounded-lg transition-all duration-200"
                      onClick={closeSidebar}
                    >
                      レンズ
                    </Link>
                  </li>
                  <li className={`transform transition-all duration-300 ease-out delay-200 ${
                    !isSidebarAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}>
                    <Link 
                      href="/about" 
                      className="flex items-center px-4 py-3 !text-gray-800 hover:bg-red hover:text-white hover:scale-105 rounded-lg transition-all duration-200"
                      onClick={closeSidebar}
                    >
                      OWNDAYSについて
                    </Link>
                  </li>
                  <li className={`transform transition-all duration-300 ease-out delay-250 ${
                    !isSidebarAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}>
                    <Link 
                      href="/store-locator" 
                      className="flex items-center px-4 py-3 !text-gray-800 hover:bg-red hover:text-white hover:scale-105 rounded-lg transition-all duration-200"
                      onClick={closeSidebar}
                    >
                      店舗検索
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;