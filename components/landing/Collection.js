import ProductCard from "../card/ProductCard"
import Image from 'next/image'

const Collection = () => {
  return (
    <div className="max-w-[1440px] w-full bg-[#7ABC8C] mx-auto rounded-t-[170px]">
      {/* Family */}
      <div className="px-[165px] py-[150px]">
        {/* Description */}
        <div className="grid grid-cols-[1fr_1fr] gap-10 mb-[10%]">
          <div className="flex relative">
            <p className="lg:text-[146px] font-black text-white leading-[1] tracking-[10px]">
              FAMILY
            </p>

            <Image 
              src="/assets/image/family.png" 
              alt="Family illustration"
              width={600}
              height={400}
              className="absolute top-0 w-[70%] max-w-[600px] mt-[12%] left-[50%] transform -translate-x-1/2" 
            />
          </div>

          <div className="flex flex-col mt-[20%] w-full">
            <div className="flex w-full items-center text-[22px] tracking-[1px]"> 
              <span className="text-black flex items-center">小さなお子様がいる</span>
              <span className="text-black flex items-center">家庭でも
                <p className="flex  justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">安</p>
                <p className="flex  justify-center items-center bg-black rounded-[100%] text-white p-1 w-[30px] h-[30px] ml-1">心</p>
              </span>
            </div>

            <div className="flex text-black text-[36px] bg-white max-w-max px-[14px] py-[5px] mt-4.5 mb-7 tracking-[2px]">
              軽くて丈夫なフレーム
            </div>

            <div className="text-black tracking-[1px] text-[14px] leading-7">
              小さな子供がいるご家庭には、軽量で丈夫な樹脂素材のフレームが最適！行楽シーズンにあわせて家族でまとめて新調してみては？傷防止やUVカットの機能が搭載されたオプションレンズもおすすめ。
            </div>
          </div>
        </div>

        {/* Product */}
        <div className="grid grid-cols-[1fr_1fr_1fr] w-full bg-white rounded-2xl px-[5px] py-[35px]">
          <ProductCard type='glasses' productName='air' productCode='au2101e-3a c3 カーキ' productImg='/assets/image/glasses_1.png' isFavorite bgColor="#468A59" productPrice='11,000'/>
          <ProductCard type='sunglasses' productName='sun' productCode='sun2107n-4s c1 ブラック' productImg='/assets/image/glasses_2.png' isFavorite bgColor="#468A59" productPrice='8,000'/>
          <ProductCard type='kids glasses' productName='junni' productCode='ju2037n-4s c3 クリアブルー' productImg='/assets/image/glasses_3.png' isFavorite bgColor="#468A59" productPrice='7,000'/>
        </div>
      </div>
    </div>
  )
}

export default Collection