const ButtonPrimary = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white px-11.5 py-5.75 rounded-lg hover:bg-[#005D31] transition-colors duration-200 cursor-pointer text-[18px] font-medium font-mizolet"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;