import TopNavigation from 'src/components/TopNavigation/TopNavigation'
import 'src/pages/landingpage.css'
import HeroImg from 'src/assets/images/hero-banner.svg'
import Service1 from 'src/assets/images/service-01.svg'
import Service2 from 'src/assets/images/service-02.svg'
import Button from 'src/components/Button/Button'  //Button Component
import Faq from 'src/components/FAQS/Faq'  //FAQ component
import Footer from 'src/components/Footer/Footer'

const LandingPage = () => {
  const sections = [
    { title: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', content: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
    { title: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?', content: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
    { title: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?', content: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' }
  ];

  return (
    <>
      {/* Top Navigation */}
      <TopNavigation />

      {/* Hero Section */}
      <section className='hero' id='home'>
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
        <div className='service' id='service-1'>
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
              <span className='button'><Button>LEARN MORE</Button></span>
            </div>
          </div>
        </div>

        {/* service 2 */}
        <div className='service' id='service-2'>
          {/* content */}
          <div className='service--content' style={{ alignSelf: "flex-start", width: '650px' }}>
            <div>
              <span className='header'>
                Digital Strategy Consulting
              </span>
              <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing,
                each component will never work in isolation and every business needs a different mix. We provide a clear concept
                and strategic overview to find the most efficient model for your business.</p>
              <span className='button'><Button>LEARN MORE</Button></span>
            </div>
          </div>
          {/* iamge */}
          <div className='service--image' style={{ alignSelf: "flex-end", width: '414px' }}>
            <img src={Service2} alt="service-2-img" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='faq' id='about'>
        <div className='content'>
          <span className='faq--header'>
            Frequently asked questions
          </span>
          <Faq sections={sections} />
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>


    </>
  )
}

export default LandingPage
