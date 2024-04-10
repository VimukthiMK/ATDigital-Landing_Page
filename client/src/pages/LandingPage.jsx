import TopNavigation from 'src/components/TopNavigation/TopNavigation'
import 'src/pages/landingpage.css'
import HeroImg from 'src/assets/images/hero-banner.svg'
import Service1 from 'src/assets/images/service-01.svg'
import Service2 from 'src/assets/images/service-02.svg'
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

      {/*Services Section*/}
      <section id='service' className='services'>
        {/* service 1 */}
        <div className='service'>
          {/* iamge */}
          <div className='service--image' style={{ alignSelf: "flex-start", width: '414px' }}>
            <img src={Service1} alt="service-1-img" />
          </div>
          {/* content */}
          <div className='service--content' style={{ alignSelf: "flex-end", width: '650px' }}>
            <div>
              <span className='header'>
                Web & Mobile App Development
              </span>
              <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which
                tailor content and engagement methods to respond to different intents shown by your potential
                customers who interact with your business online.</p>
              <Button>LEARN MORE</Button>
            </div>
          </div>
        </div>

        {/* service 2 */}
        <div className='service'>
          {/* content */}
          <div className='service--content' style={{ alignSelf: "flex-start", width: '650px' }}>
            <div>
              <span className='header'>
                Digital Strategy Consulting
              </span>
              <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing,
                 each component will never work in isolation and every business needs a different mix. We provide a clear concept
                  and strategic overview to find the most efficient model for your business.</p>
              <Button>LEARN MORE</Button>
            </div>
          </div>
          {/* iamge */}
          <div className='service--image' style={{ alignSelf: "flex-end", width: '414px' }}>
            <img src={Service2} alt="service-2-img" />
          </div>

        </div>

      </section>


    </>
  )
}

export default LandingPage
