import Button from "../UI/Button";

import logo from '../../assets/images/logo.svg';

const Footer = () => {

    const social = [
        {
            id: 1,
            src: '.\images\icon-facebook.svg',
            alt:'facebook'
        },
        {
            id: 2,
            src: '.\images\icon-youtube.svg',
            alt:'youtube'
        },
        {
            id: 3,
            src: '.\images\icon-twitter.svg',
            alt:'twitter'
        },
        {
            id: 4,
            src: '.\images\icon-pinterest.svg',
            alt:'pinterest'
        },
        {
            id: 5,
            src: '.\images\icon-instagram.svg',
            alt:'instagram'
        }
    ]

    return ( 
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__wrapper">
                    <div className="footer__logo-container">
                        <img className="footer__logo" src={logo} alt="Easybank" />
                        <div className="footer__social">
                            { social.map(item => <img key={item.id} src={item.src} alt={item.alt}/>)}
                        </div>
                    </div>
                </div>
                <div className="footer__wrapper">
                    <ul className="footer__list">
                        <li className="footer__list-item">About us</li>
                        <li className="footer__list-item">Contact</li>
                        <li className="footer__list-item">Blog</li>
                    </ul>
                </div>
                <div className="footer__wrapper">
                    <ul className="footer__list">
                        <li className="footer__list-item">Careers</li>
                        <li className="footer__list-item">Support</li>
                        <li className="footer__list-item">Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="footer__container">
                <Button>Request Invite</Button>
                <p className="footer__copyright">© Easybank. All Rights Reserved</p>
            </div>
        </footer>

     );
}
 
export default Footer;