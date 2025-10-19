import { useState } from "react";
import ProductCard from "../card/ProductCard";
import ButtonSeeMoreProduct from "../button/ButtonSeeMoreProduct";
import Image from "next/image";

const ProductCarousel = ({ products, title, subTitle, titleColor = "#F2DC00", buttonText, onButtonClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = products.length - 1;
      return prev < maxSlide ? prev + 1 : 0; // Loop back to start
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = products.length - 1;
      return prev > 0 ? prev - 1 : maxSlide; // Loop to end
    });
  };

  return (
    <div className="w-full flex flex-col items-center text-center bg-white py-[30px] sm:py-[50px]">
      {/* Title Section */}
      <div className="w-full max-w-[240px] flex flex-col">
        <h1 
          className="text-[22px] sm:text-[32px] mb-4 sm:mb-7 [text-shadow:_-1px_-1px_0_black,_1px_-1px_0_black,_-1px_1px_0_black,_1px_1px_0_black] font-mizolet"
          style={{ color: titleColor }}
        >
          {title}
					<span className="text-[25px] font-thin text-black text-shadow-none ml-2">{subTitle}</span>
        </h1>

       <Image
					src="/assets/image/line_center_horizontal_black.png" 
					alt="Arrow"
					width={200}
					height={10}
					style={{width: '100%', height: '100%', objectFit: 'contain'}}
				/>
      </div>

      {/* Desktop View - Show all cards in a row */}
      <div className="hidden lg:flex mt-10">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            productName={product.productName}
            productCode={product.productCode}
            productImg={product.productImg}
            bgColor={product.bgColor}
            productPrice={product.productPrice}
            isFavorite={product.isFavorite}
						isAudio={product.isAudio}
						isKids={product.isKids}
          />
        ))}
      </div>

      {/* Mobile/Tablet Carousel - Responsive card display */}
      <div className="lg:hidden w-full mt-10 max-w-sm sm:max-w-2xl mx-auto px-4">
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            {/* Mobile View: Show 1 card */}
            <div 
              className="flex sm:hidden transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0 flex justify-center px-2">
                  <ProductCard 
                    productName={product.productName}
                    productCode={product.productCode}
                    productImg={product.productImg}
                    bgColor={product.bgColor}
                    productPrice={product.productPrice}
                    isFavorite={product.isFavorite}
                    isAudio={product.isAudio}
                    isKids={product.isKids}
                  />
                </div>
              ))}
            </div>

            {/* SM+ View: Show 2 cards */}
            <div 
              className="hidden sm:flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-1/2 flex-shrink-0 flex justify-center px-2">
                  <ProductCard 
                    productName={product.productName}
                    productCode={product.productCode}
                    productImg={product.productImg}
                    bgColor={product.bgColor}
                    productPrice={product.productPrice}
                    isFavorite={product.isFavorite}
                    isAudio={product.isAudio}
										isKids={product.isKids}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute w-10 h-10 left-3 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border-2 border-black rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous product"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute w-10 h-10 right-3 top-1/2 -translate-y-1/2 translate-x-4 bg-white border-2 border-black rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
            aria-label="Next product"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Button Section */}
      {buttonText && (
        <div className="mt-4 sm:mt-8 md:mt-10">
        <ButtonSeeMoreProduct text={buttonText} onClick={onButtonClick} />
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;