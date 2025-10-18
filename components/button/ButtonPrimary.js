const ButtonPrimary = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="min-w-[205px] md:min-w-[180px] lg:min-w-[205px] bg-white text-black border-black border-[2px] px-4 sm:px-6 lg:px-7 py-4.5 sm:py-4 lg:py-5 rounded-[80px] duration-200 cursor-pointer text-[14px] sm:text-sm lg:text-[14px] font-semibold tracking-[1px] box-shadow-custom hover:!shadow-none"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;