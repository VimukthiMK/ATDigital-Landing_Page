import Logo from 'src/assets/logo/at-digital-logo.svg'
import 'src/components/TopNavigation/topnavigation.css'


const TopNavigation = () => {

  return (
    <header>
      {/* navigation Bar */}
      <div className='navbar'>
        {/* Logo */}
        <div className='navbar--logocontainer'>
          <a href="#home"><img src={Logo} alt="app-logo" /></a>
        </div>
        {/* navigation */}
        <div className='navbar--navcontainer'>
          <ul className="nav-links">
            <li><a href="#service">SERVICES</a></li>
            <li><a href="#about">ABOUT US</a></li>                                                                            
            <li><a href="#contact">CONTACT US</a></li>
            <li><a href="#careers">CAREERS</a></li>
          </ul>
        </div>
        <div className="hamburger-menu">
          
        </div>

      </div> 
    </header>

  )
}

export default TopNavigation
