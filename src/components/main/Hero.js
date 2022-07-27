import hero from '../../assets/images/bg-intro-mobile.svg';
import heroMockup from '../../assets/images/image-mockups.png';

import Button from '../UI/Button';

const Hero = () => {
    return ( 
        <section className="hero">
            <div className="hero__img-container">
                <img src={hero} alt="hero background" />
            </div>
            <div className='hero__content'>
                <h1 className='hero__heading'>Next generation digital banking</h1>
                <p className='hero__paragraph'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <Button>Request Invite</Button>
            </div>
            <img src={heroMockup} alt="hero mockup" className='hero__mockup'/>
        </section>
     );
}
 
export default Hero;