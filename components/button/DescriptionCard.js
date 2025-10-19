const DescriptionCard = ({ title, description, price, hightLight = false }) => {
  return (
    <div className="group flex flex-wrap flex-col bg-white border-black rounded-lg border-2 p-5.5 pl-5.5 py-3 sm:py-8.5 lg:px-9.5 max-w-[366px] min-h-[206px] sm:min-h-[230px] box-shadow-custom hover:!shadow-none relative cursor-pointer">
      <div className="hidden sm:flex sm:flex-col">{/* Title */}
        <h2 className="text-[16px] md:text-[18px] font-semibold mb-3 text-black tracking-[2px] text-left font-mizolet">{title}</h2>

        {/* Description */}
        <p className="text-[12px] md:text-[13px] leading-6 mb-2.5 text-black text-left font-bold font-yu-gothic">
          {description}
        </p>
        
        {/* Price Badge */}
        <div className={`${hightLight && 'bg-yellow shadow-md'} rounded-lg text-black text-left max-w-max px-2 py-0.5`}>
          <span className="text-[21px] font-semibold">+ ¥{price}</span>
          <span className="text-[13px] ml-1">税込</span>
        </div>
      </div>

      {/* Arrow Circle */}
      <div className="hidden sm:flex absolute bottom-[15px] right-[15px] w-[47px] h-[47px] bg-black group-hover:bg-[#005D31] duration-200 rounded-full  items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
        </svg>
      </div>

      {/* Mobile View */}
      <div className="flex flex-nowrap sm:hidden w-full h-[178px] justify-between items-center">
        <div className="flex flex-col px-0 md:px-3 py-3.5 md:py-4.5 text-left">
          <span className="flex text-[16px] md:text-[18px] text-black font-medium font-mizolet mb-2 md:mb-3">{title}</span>
          <span className="text-[12px] md:text-[13px] text-black font-medium font-mizolet">{description}</span>
          <span className="flex items-end text-black text-[19px] md:text-[21px] font-bold mt-3">+ ¥{price}<p className="text-black text-[15px] font-light ml-2 mb-1">税込</p></span>
        </div>

        <div className="h-[100%] w-[5px] bg-black mx-3 md:mx-6 h-full-fill"></div>

        {/* Arrow Right */}
        <div className={`sm:hidden flex items-center justify-center ${!title && 'w-full'} sm:mb-0 sm:w-max`}>
          <div className="h-[40px] w-[40px] sm:w-[47px] sm:h-[47px] rounded-full bg-black group-hover:bg-[#005D31] transition-colors duration-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;