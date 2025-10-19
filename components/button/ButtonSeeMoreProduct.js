const ButtonSeeMoreProduct = ({ text = '' }) => {
  return (
    <button className="group flex items-center justify-between min-w-[312px] min-h-[64px] bg-white text-black border-black border-[2px] px-2 rounded-[80px] duration-200 cursor-pointer text-[14px] font-semibold tracking-[1px] box-shadow-custom hover:!shadow-none">
      <span className="ml-4">{text}</span>

      <div className="h-[40px] w-[40px] sm:w-[47px] sm:h-[47px] right-[-100px] rounded-full bg-black group-hover:bg-[#005D31] transition-colors duration-200 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </button>
  )
}

export default ButtonSeeMoreProduct