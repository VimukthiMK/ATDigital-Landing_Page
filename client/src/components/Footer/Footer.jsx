import 'src/components/Footer/footer.css'
import Logo from 'src/assets/logo/at-digital-logo.svg'  //Logo

const Footer = () => {

    return (
        <section className='footer'>
            {/* Navigation & company info */}
            <div className='bottom-nav'>
                {/* company section */}
                <div className='company'>
                    {/* logo */}
                    <img src={Logo} alt="app-logo" />
                    {/* content */}
                    <p>Your goal is our target. Not anything in between. We use online
                        marketing platforms and tools to achieve single objective - your business results.</p>
                </div>
                {/* Navigation */}
                <div className='navigation'>
                    {/* technologies */}
                    <nav className='navlist'>
                        <span className='head'>Our Technologies</span>
                        <ul>
                            <li><a href="">ReactJS</a></li>
                            <li><a href="">Gatsby</a></li>
                            <li><a href="">NextJS</a></li>
                            <li><a href="">NodeJS</a></li>
                        </ul>
                    </nav>
                    {/* Services */}
                    <nav className='navlist'>
                        <span className='head'>Our Services</span>
                        <ul>
                            <li><a href="">Social media Marketing</a></li>
                            <li><a href="">Web & Mobile App Development</a></li>
                            <li><a href="">Data & Analytics</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Bottom footer */}
            <div className='bottom-footer'>
                <div>
                    <a href="#">Social media Marketing</a>
                    <p>|</p>
                    <a href="#">Data & Analytics</a>
                </div>
            </div>
        </section>
    )
}

export default Footer
