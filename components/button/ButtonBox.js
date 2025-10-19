const ButtonBox = ({ 
  title = '',
  message = '', 
  price = '',
  arrowDirection = 'down',
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`group ${title ? 'max-w-[350px] md:max-w-[450px] p-[12px] pl-[21px] sm:px-[24px]' : 'max-w-[390px] px-[12px] sm:px-[24px]'} py-[13px] flex flex-wrap sm:flex-nowrap items-center justify-between bg-white border-2 border-black rounded-xl hover:bg-white transition-colors duration-200 cursor-pointer box-shadow-custom hover:!shadow-none`}
    >
      {title ?
        <div className="flex-1 flex-col px-0 md:px-3 py-3.5 md:py-4.5 text-left">
          {/* Text left */}
          <span className="flex text-[16px] md:text-[18px] text-black font-medium font-mizolet mb-2 md:mb-3">{title}</span>
          <span className="text-[12px] md:text-[13px] text-black font-medium font-mizolet">{message}</span>
          <span className="flex items-end text-black text-[19px] md:text-[21px] font-bold mt-3">+ ¥{price}<p className="text-black text-[15px] font-light ml-2 mb-1">税込</p></span>
        </div>
      : <div className="flex-1 py-[15px] w-full sm:py-[20px] md:px-[15px] md:py-[8%]  lg:px-[20px] lg:py-[10%] text-center">
          <span className="text-[14px] sm:text-[18px] text-black font-medium font-mizolet">{message}</span>
        </div>
      }
      
      {/* Line Center */}
      {title ?
        <div className="flex h-[100%] w-[2px] bg-black mx-3 md:mx-6 h-full-fill"></div>
        :<div className="hidden sm:flex h-[100%] w-[2px] bg-black mx-6 h-full-fill"></div>
      }
      
      {/* Circle right arrow */}
      <div className={`flex items-center justify-center ${!title && 'w-full'} mb-[12px] sm:mb-0 sm:w-max`}>
        <div className="h-[40px] w-[40px] sm:w-[47px] sm:h-[47px] rounded-full bg-black group-hover:bg-[#005D31] transition-colors duration-200 flex items-center justify-center">
          {arrowDirection === 'down' ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l7.5-7.5M12 19.5 4.5 12" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          }
        </div>
      </div>
    </button>
  );
};

export default ButtonBox;