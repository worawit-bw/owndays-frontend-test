const DescriptionCard = ({ title, description, price, hightLight = false }) => {
  return (
    <div className="group flex flex-col bg-white border-black rounded-lg border-2 py-8.5 px-9.5 max-w-[366px] min-h-[230px] box-shadow-custom hover:!shadow-none relative cursor-pointer">
      {/* Title */}
      <h2 className="text-[18px] font-semibold mb-3 text-black tracking-[2px] text-left font-mizolet">{title}</h2>

      {/* Description */}
      <p className="text-[13px] leading-6 mb-2.5 text-black text-left font-black font-yu-gothic">
        {description}
      </p>
      
      {/* Price Badge */}
      <div className={`${hightLight && 'bg-yellow shadow-md'} rounded-lg text-black text-left max-w-max px-2 py-0.5`}>
        <span className="text-[21px] font-semibold">+ ¥{price}</span>
        <span className="text-[13px] ml-1">税込</span>
      </div>
      
      {/* Arrow Circle */}
      <div className="absolute bottom-[15px] right-[15px] w-[47px] h-[47px] bg-black group-hover:bg-[#005D31] duration-200 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
        </svg>
      </div>
    </div>
  );
};

export default DescriptionCard;