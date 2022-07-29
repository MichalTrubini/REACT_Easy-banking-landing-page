import '../../assets/css/mobile-menu.css';

const MobileMenu = () => {

    return ( 
        <div className="mobile-menu">
            <ul className='mobile-menu__list'>
                <li className='mobile-menu__list-item'>Home</li>
                <li className='mobile-menu__list-item'>About</li>
                <li className='mobile-menu__list-item'>Contact</li>
                <li className='mobile-menu__list-item'>Blog</li>
                <li className='mobile-menu__list-item'>Careers</li>
            </ul>
        </div>
     );
}
 
export default MobileMenu;