import Image from 'next/image';
import ButtonPrimary from '../button/ButtonPrimary';

const ProductCard = ({ type, productName, productCode, productImg, isFavorite = false, bgColor = "#468A59", productPrice = 0 }) => {
	
	if (isFavorite) return (
		<div className='flex flex-col items-center justify-center'>
			{/* Product Type */}
			<span 
				className="text-white text-[0.8rem] py-[8px] px-[22px] font-semibold tracking-[1px] rounded-3xl"
				style={{ backgroundColor: bgColor }}
			>
				{type.toUpperCase()}
			</span>
			{/* Product Name */}
			<h1 className="z-1 text-black text-[1.18rem] tracking-[1px] font-semibold mt-[20px]">{productName.toUpperCase()}</h1>
			{/* Product Code */}
			<h5 className="z-1 text-black text text-[1rem] tracking-[1px] font-medium">{productCode.toUpperCase()}</h5>
			{/* Product Image */}
			<div className="flex relative top-[-6%]">
				<Image 
					src={productImg} 
					alt={`${productName} ${productCode}`}
					width={357}
					height={300}
					className="w-full max-w-[357px]"
				/>
			</div>
			{/* Product Price */}
			<span className="flex text-black text-[1.375rem] font-semibold items-center relative top-[-12%]">{`¥${productPrice}`}<p className="text-[0.7rem] font-normal ml-1 mt-1">税込</p></span>
			{/* Button & Favorite Icon */}
			<div className="flex">
				<ButtonPrimary text="ONLINE STORE"/>

				<button className="cursor-pointer group pl-5">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-7 text-gray-800 group-hover:text-red group-hover:fill-red transition-all duration-200">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
					</svg>
				</button>
			</div>
		</div>
	)
	
	return (
		<div className='flex flex-col items-center justify-center'>
			{/* Product Type */}
			<span className="text-wite text-[0.8rem] bg-black py-[8px] px-[22px] font-semibold tracking-[1px] rounded-3xl">{type.toUpperCase()}</span>
			{/* Product Name */}
			<h1 className="z-1 text-black text-[1.18rem] tracking-[1px] font-semibold mt-[20px]">{productName.toUpperCase()}</h1>
			{/* Product Code */}
			<h5 className="z-1 text-black text text-[1rem] tracking-[1px] font-medium">{productCode.toUpperCase()}</h5>
			{/* Product Image */}
			<div className="flex relative top-[-6%]">
				<Image 
					src={productImg} 
					alt={`${productName} ${productCode}`}
					width={357}
					height={300}
					className="w-full max-w-[357px]"
				/>
			</div>
		</div>
	)
}

export default ProductCard