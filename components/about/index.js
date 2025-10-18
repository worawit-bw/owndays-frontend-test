import AboutHero from './AboutHero'
import CompanyInfo from './CompanyInfo'
import GlobalPresence from './GlobalPresence'
import Timeline from './Timeline'

const AboutIndex = () => {
  return (
    <div className="min-h-screen mt-[110px] lg:mt-[130px]">
      <AboutHero />
      <CompanyInfo />
      <Timeline />
      <GlobalPresence />
    </div>
  )
}

export default AboutIndex