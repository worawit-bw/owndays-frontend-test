import BrandsHero from './BrandsHero'
import BrandCategories from './BrandCategories'
import FeaturedBrands from './FeaturedBrands'

const BrandsIndex = () => {
  return (
    <div className="min-h-screen bg-white mt-[110px] lg:mt-[130px]">
      <BrandsHero />
      <BrandCategories />
      <FeaturedBrands />
    </div>
  )
}

export default BrandsIndex