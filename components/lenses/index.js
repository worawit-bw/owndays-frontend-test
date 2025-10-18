import LensHero from './LensHero'
import LensCategories from './LensCategories'
import LensDetails from './LensDetails'

const LensesIndex = () => {
  return (
    <div className="min-h-screen mt-[110px] lg:mt-[130px]">
      <LensHero />
      <LensCategories />
      <LensDetails />
    </div>
  )
}

export default LensesIndex
