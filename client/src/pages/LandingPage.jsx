import TopNavigation from 'src/components/TopNavigation/TopNavigation'
import 'src/pages/landingpage.css'
import HeroImg from 'src/assets/images/hero-banner.svg'
import Button from 'src/components/Button/Button'

const LandingPage = () => {

  return (
    <>
      {/* Top Navigation */}
      <TopNavigation />

      {/* Hero Section */}
      <section className='hero'>
        <div className='hero--image'>
          <img src={HeroImg} alt="hero-img" />
        </div>
        <div className='hero--content'>
        <span>We Crush Your <br /> Competitors, Goals, And Sales Records - <br /> Without The B.S.</span>
         <Button> GET FREE CONSULTATION </Button>
        </div>
      </section>


    </>
  )
}

export default LandingPage
