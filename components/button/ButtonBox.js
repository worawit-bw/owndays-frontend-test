const ButtonBox = ({ 
  title = '',
  message = '', 
  arrowDirection = 'down',
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className="group max-w-[390px] flex flex-wrap items-center justify-between bg-white border-2 border-black rounded-xl hover:bg-white transition-colors duration-200 cursor-pointer px-[12px] sm:px-[24px] py-[13px] box-shadow-custom hover:!shadow-none"
    >
      {title ?
        <div className="flex-1 flex-col px-9 py-7 text-center">
          {/* Text left */}
          <span className="flex text-[18px] text-black font-semibold font-mizolet">{title}</span>
          <span className="text-[13px] text-black font-medium font-mizolet">{message}</span>
        </div>
      : <div className="flex-1 py-[15px] w-full sm:py-[20px] md:px-[15px] md:py-[8%]  lg:px-[20px] lg:py-[10%] text-center">
          <span className="text-[14px] sm:text-[18px] text-black font-medium font-mizolet">{message}</span>
        </div>
      }
      
      {/* Line Center */}
      <div className="hidden sm:flex h-[100%] w-[2px] bg-black mx-6 h-full-fill"></div>
      
      {/* Circle right arrow */}
      <div className="flex items-center justify-center w-full mb-[12px] sm:mb-0 sm:w-max">
        <div className="h-[40px] w-[40px] sm:w-[47px] sm:h-[47px] rounded-full bg-black group-hover:bg-[#005D31] transition-colors duration-200 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ButtonBox;