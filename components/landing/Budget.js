import BoxMessage from "../button/BoxMessage"
import ButtonBox from "../button/ButtonBox"

const Budget = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-center text-center mt-[60px] sm:mt-[112px]">
        <BoxMessage message='BUDGET'/>
        <h1 className="text-black text-[26px] md:text-[40px] mt-6  font-mizolet tracking-[4px]">予算から選ぶ</h1>
        <span className="text-[17px] md:text-[27px] text-black tracking-[4px]">メガネ・サングラス</span>
      </div>

      <div className="mt-[40px] sm:mt-[60px] mb-[30px] sm:mb-[40px] w-full max-w-[1440px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[80px]">
        <div className="flex sm:flex-wrap sm:flex-row gap-2 sm:gap-4 justify-center items-center w-full">
          <ButtonBox message="20,000円以上" />
          <ButtonBox message="10,000円台" />
          <ButtonBox message="8,000円以下" />
        </div>
      </div>
    </div>
  )
}

export default Budget