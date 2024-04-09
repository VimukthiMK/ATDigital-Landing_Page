import Logo from 'src/assets/logo/at-digital-logo.svg'
import 'src/components/TopNavigation/topnavigation.css'


const TopNavigation = () => {

  return (
    <header>
      <div className='navbar'>
        <div className='navbar-logocontainer'>
          <img src={Logo} alt="app-logo" />
        </div>
        <div className='navbar-navcontainer'>
          <ul className="nav-links">
            <li><a href="#service">SERVICES</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#contact">CONTACT US</a></li>
            <li><a href="#careers">CAREERS</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default TopNavigation
