import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';

import '../../assets/css/header.css';

const Header = () => {
    return ( 
        <header>
            <nav className="nav">
                <img src={logo} alt='easyBank'/>
                <ul className='nav__list'>
                    <li className='nav__list-item'>Home</li>
                    <li className='nav__list-item'>About</li>
                    <li className='nav__list-item'>Contact</li>
                    <li className='nav__list-item'>Blog</li>
                    <li className='nav__list-item'>Careers</li>
                </ul>
                <img src={hamburger} alt="mobile-menu"/>
            </nav>
        </header>
     );
}
 
export default Header;