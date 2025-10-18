import BoxMessage from "../button/BoxMessage";
import ButtonBox from "../button/ButtonBox";

const Pickup = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="w-full flex flex-wrap mt-[80px] sm:mt-[100px] md:mt-[140px] px-[16px] sm:px-[32px] lg:px-[11%] justify-between items-center">
        <div className="flex flex-col mr-0 md:mr-6 w-full md:w-max lg:mr-10">
          <p className="text-[50px] lg:text-[65px] font-bold text-red leading-[1] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black] tracking-[5px] text-center">PICK UP</p>
          <p className="text-[18px] lg:text-[21px] text-black mt-[10px] text-center">おすすめアイテム</p>
        </div>

        <div className="flex flex-1 justify-center w-full mt-[35px] md:mt-0 md:justify-end md:w-max">
          <div className="mx-2">
            <ButtonBox message="目的から選ぶ" />
          </div>

          <div className="mx-2">
            <ButtonBox message="予算から選ぶ" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center mt-[60px] sm:mt-[112px]">
        <BoxMessage message='PURPOSE'/>
        <h1 className="text-black text-[26px] md:text-[40px] mt-6 mb-12 font-mizolet tracking-[4px]">目的から選ぶ</h1>
      </div>

      <div className="flex sm:hidden px-[16px] mb-[40px]">
        <div className="flex flex-1 justify-center w-full  md:justify-end md:w-max">
          <div className="mx-2">
            <ButtonBox message="家族でまとめ買い" />
          </div>

          <div className="mx-2">
            <ButtonBox message="自分用に複数買い" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pickup