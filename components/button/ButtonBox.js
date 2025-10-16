const ButtonBox = ({ 
  message = '', 
  arrowDirection = 'down',
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-between bg-white border-2 border-black rounded-xl hover:bg-white transition-colors duration-200 cursor-pointer px-[24px] py-[13px] box-shadow-custom hover:!shadow-none"
    >
      {/* ข้อความทางซ้าย */}
      <div className="flex-1 px-9 py-7 text-center">
        <span className="text-[18px] text-black font-medium font-mizolet">{message}</span>
      </div>
      
      {/* เส้นแบ่งตรงกลาง */}
      <div className="h-[100%] w-[2px] bg-black mx-6 h-full-fill"></div>
      
      {/* วงกลมลูกศรทางขวา */}
      <div className="flex items-center justify-center">
        <div className="w-[47px] h-[47px] rounded-full bg-black group-hover:bg-[#005D31] transition-colors duration-200 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ButtonBox;