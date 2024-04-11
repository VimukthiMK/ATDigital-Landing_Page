import Logo from 'src/assets/logo/at-digital-logo.svg'
import './topnavigation.css' // CSS file
import { slide as Menu } from 'react-burger-menu';

const TopNavigation = () => {

  return (
    <nav>
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
          {/* Hamburger-menu */}
        <div className="hamburger-menu" id='hamburger-menu'>
          <Menu right width={'100%'}>
            <a id="home" className="menu-item" href="#service">SERVICES</a>
            <a id="about" className="menu-item" href="#about">ABOUT US</a>
            <a id="contact" className="menu-item" href="#contact">CONTACT US</a>
            <a id="projects" className="menu-item" href="#careers">CAREERS</a>
          </Menu>
        </div>
      </div>
    </nav>
  )
}

export default TopNavigation
