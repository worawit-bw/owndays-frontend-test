import Image from 'next/image';

const BoxMessage = ({ message, textColor }) => {
  return (
    <div className="flex items-center justify-center px-7 py-2 bg-white border-2 border-black rounded-xl shadow-custom  box-shadow-custom  relative mx-auto">
      {/* Background */}
      <div className="w-full h-full bg-white z-1 absolute t-0 left-0 border-1 border-white rounded-xl"></div>
      {/* Text */}
      <h1 className={`text-[15px] font-bold ${textColor ? `text-${textColor}` : 'text-red'} tracking-wider tracking-3 leading-7 z-3 bg-white`}>
        {message}
      </h1>

      {/* Arrow Text */}
      <Image 
        src="/assets/image/white_arrow_box.png" 
        alt="White arrow" 
        width={15} 
        height={35} 
        className="absolute right-[11%] bottom-[-30%] z-1" 
      />
      <Image 
        src="/assets/image/black_arrow_box.png" 
        alt="Black arrow" 
        width={23} 
        height={53} 
        className="absolute right-[6%] bottom-[-35%] z-0" 
      />
    </div>
  );
}

export default BoxMessage;