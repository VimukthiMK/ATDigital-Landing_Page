import TopNavigation from 'src/components/TopNavigation/TopNavigation' //Top navigation Component
import Button from 'src/components/Button/Button'  //Button Component
import Faq from 'src/components/FAQS/Faq' // Faq Component
import Footer from 'src/components/Footer/Footer' //Footer Component

import HeroImg from 'src/assets/images/hero-banner.svg' //Hero Image
import Service1 from 'src/assets/images/service-01.svg' //Service Image 1
import Service2 from 'src/assets/images/service-02.svg'  //Service Image 2

import landingPageData from 'src/data/landingPageData.json' // Import the JSON data
import 'src/pages/landingpage.css'

const LandingPage = () => {
  const { sections, heroContent, services } = landingPageData // Destructure the data

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
          <span>{heroContent.title}</span>
          <Button>{heroContent.buttonText}</Button>
        </div>
      </section>

      {/* Services Section */}
      <section id='service' className='services'>

        {/* service 1 */}
        <div className='service' id='service-1'>
          {/* image */}
          <div className='service--image' style={{ alignSelf: "flex-start", width: '414px' }}>
            <img src={Service1} alt="service-1-img" />
          </div>
          {/* content */}
          <div className='service--content' style={{ alignSelf: "flex-end", width: '650px' }}>
            <div>
              <span className='header'>{services[0].title}</span>
              <p>{services[0].description}</p>
              <span className='button'><Button>LEARN MORE</Button></span>
            </div>
          </div>
        </div>

        {/* service 2 */}
        <div className='service' id='service-2'>
          {/* content */}
          <div className='service--content' style={{ alignSelf: "flex-start", width: '650px' }}>
            <div>
              <span className='header'>{services[1].title}</span>
              <p>{services[1].description}</p>
              <span className='button'><Button>LEARN MORE</Button></span>
            </div>
          </div>
          {/* image */}
          <div className='service--image' style={{ alignSelf: "flex-end", width: '414px' }}>
            <img src={Service2} alt="service-2-img" />
          </div>
        </div>

      </section>

      {/* FAQ Section */}
      <section className='faq' id='about'>
        <div className='content'>
          <span className='faq--header'>Frequently asked questions</span>
          <Faq sections={sections} />
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  )
}

export default LandingPage
