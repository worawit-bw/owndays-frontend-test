import BoxMessage from "../button/BoxMessage";
import ButtonBox from "../button/ButtonBox";

const Pickup = () => {
  return (
    <>
      <div className="w-full mt-[140px] max-w-[1109px] mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <p className="lg:text-[65px] font-bold text-red leading-[1] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black] tracking-[5px]">PICK UP</p>
          <p className="text-black text-[21px] mt-[10px]">おすすめアイテム</p>
        </div>

        <div className="flex">
          <div className="mx-2">
            <ButtonBox message="目的から選ぶ" />
          </div>

          <div className="mx-2">
            <ButtonBox message="予算から選ぶ" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center mt-[112px]">
        <BoxMessage message='PURPOSE'/>
        <h1 className="text-black text-[40px] my-6 font-mizolet tracking-[4px]">目的から選ぶ</h1>
      </div>
    </>
  )
}

export default Pickup