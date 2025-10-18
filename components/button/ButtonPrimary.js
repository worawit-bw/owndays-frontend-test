const ButtonPrimary = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black border-black border-[2px] px-11.5 py-5.75 rounded-[80px] duration-200 cursor-pointer text-[18px] font-semibold tracking-[1px] box-shadow-custom hover:!shadow-none"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;