const BoxMessage = ({ message }) => {
  return (
    <div className="flex items-center justify-center px-7 py-2 bg-white border-2 border-black rounded-xl shadow-custom  box-shadow-custom  relative mx-auto">
      {/* Background */}
      <div className="w-full h-full bg-white z-1 absolute t-0 left-0 border-1 border-white rounded-xl"></div>
      {/* Text */}
      <h1 className="text-[15px] font-bold text-red tracking-wider tracking-3 leading-7 z-3 bg-white">
        {message}
      </h1>

      {/* Arrow Text */}
      <img src="/assets/image/white_arrow_box.png" className="absolute w-[15px] h-[35px] right-[11%] bottom-[-30%] z-1" />
      <img src="/assets/image/black_arrow_box.png" className="absolute w-[23px] h-[53px] right-[6%] bottom-[-35%] z-0" />
    </div>
  );
}

export default BoxMessage;