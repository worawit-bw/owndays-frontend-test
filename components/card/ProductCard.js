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
				<img src={productImg} className="w-full max-w-[357px]" />
			</div>
			{/* Product Price */}
			<span className="flex text-black text-[1.375rem] font-semibold items-center relative top-[-12%]">{`¥${productPrice}`}<p className="text-[0.7rem] font-normal ml-1 mt-1">税込</p></span>
			{/* Button & Favorite Icon */}
			<div className="flex">
				<></>
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
				<img src={productImg} className="w-full max-w-[357px]" />
			</div>
		</div>
	)
}

export default ProductCard