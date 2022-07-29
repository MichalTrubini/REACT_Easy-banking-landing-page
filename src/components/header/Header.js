import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';
import useWindowDimensions from '../../functions/WindowDimensions';

import '../../assets/css/header.css';
import Button from '../UI/Button';

const Header = (props) => {

    const {width} = useWindowDimensions(); 

    const tabletScreen = width > 767;

    const showMenuHandler = props.showMenuHandler;

    return ( 
        <header >
            <nav className="nav">
                <img src={logo} alt='easyBank'/>
                <ul className='nav__list'>
                    <li className='nav__list-item'>Home</li>
                    <li className='nav__list-item'>About</li>
                    <li className='nav__list-item'>Contact</li>
                    <li className='nav__list-item'>Blog</li>
                    <li className='nav__list-item'>Careers</li>
                </ul>
                {tabletScreen && <Button>Request invite</Button>}
                <img src={hamburger} alt="mobile-menu" className="nav__hamburger" onClick={showMenuHandler}/>
            </nav>
        </header>
     );
}
 
export default Header;