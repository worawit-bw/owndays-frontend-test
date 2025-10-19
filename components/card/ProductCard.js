import Image from 'next/image';
import ButtonPrimary from '../button/ButtonPrimary';

const ProductCard = ({ type, productName, productCode, productImg, isFavorite = false, bgColor = "#468A59", productPrice = 0, isAudio = false, isKids = false }) => {
	
	if (isFavorite) return (
		<div className='flex flex-col items-center justify-center px-3 pt-3 pb-5 md:p-3'>
			{/* Product Type */}
			<span 
				className="text-white text-xs sm:text-sm lg:text-[13px] py-2 sm:py-1.1 px-4 sm:px-6 font-semibold tracking-[1px] rounded-3xl"
				style={{ backgroundColor: bgColor }}
			>
				{type.toUpperCase()}
			</span>
			{/* Product Name */}
			<h1 className="z-1 text-black text-lg sm:text-xl lg:text-[18px] tracking-[1px] font-bold mt-4 sm:mt-5">{productName.toUpperCase()}</h1>
			{/* Product Code */}
			<h5 className="z-1 w-full truncate text-black text-center text-sm sm:text-base lg:text-[15px] tracking-[1px] font-medium">{productCode.toUpperCase()}</h5>
			{/* Product Image */}
			<div className="flex relative mt-[-15px] sm:-mt-5">
				<Image 
					src={productImg} 
					alt={`${productName} ${productCode}`}
					width={357}
					height={300}
					className="w-full max-w-[357px] md:max-w-[330px]"
				/>
			</div>
			{/* Product Price */}
			<span className="flex relative text-black text-lg sm:text-xl lg:text-2xl font-semibold items-center -mt-4 sm:-mt-6">{`¥${productPrice}`}<p className="text-xs sm:text-sm font-normal ml-1 mt-1">税込</p></span>
			{/* Button & Favorite Icon */}
			<div className="flex items-center mt-2 sm:mt-4">
				<ButtonPrimary text="ONLINE STORE"/>

				<button className="cursor-pointer group pl-5">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9 text-gray-800 group-hover:text-red group-hover:fill-red transition-all duration-200">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
					</svg>
				</button>
			</div>
		</div>
	)
	
	return (
		<div className='flex flex-col items-center justify-center md:px-3 md:pt-3 pb-5 md:p-3 relative'>
			{/* Product Image */}
			<div className="flex relative -mt-2 sm:-mt-3">
				<Image 
					src={productImg} 
					alt={`${productName} ${productCode}`}
					width={357}
					height={300}
					className="w-full max-w-[300px]"
				/>
			</div>
			{/* Product Name */}
			<h1 className="z-1 text-black text-[16px] tracking-[1px] font-semibold mb-1">{productName.toUpperCase()}</h1>
			{/* Product Code */}
			<h5 className="z-1 w-full truncate text-black text-center text-[12px] tracking-[1px] font-medium">{productCode.toUpperCase()}</h5>
			{/* Product Price */}
			<span className="flex relative text-black text-lg sm:text-xl lg:text-2xl font-semibold items-center mt-3">{`¥${productPrice}`}<p className="text-xs sm:text-sm font-normal ml-1 mt-1">税込</p></span>

			<div className="flex items-center mt-5 sm:mt-6">
				<ButtonPrimary text="ONLINE STORE"/>
			</div>

			{isAudio && <Image 
				src="/assets/image/audio_glasses.png" 
				alt="Audio Icon"
				width={70}
				height={27}
				className="absolute top-0 right-0 w-[70px] h-[27px]"
			/>}

			{isKids && <Image 
				src="/assets/image/for_kids.png" 
				alt="Audio Icon"
				width={70}
				height={27}
				className="absolute top-0 right-0 w-[70px] h-[27px]"
			/>}
		</div>
	)
}

export default ProductCard