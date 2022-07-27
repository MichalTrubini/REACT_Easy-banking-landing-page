import Highlight from "./Highlight";

import '../../assets/css/highlights.css';

const Highlights = () => {

    const highlight = [
        {   
            id: 1,
            img: './images/icon-online.svg',
            alt: 'online banking',
            header: 'Online Banking',
            content: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            id: 2,
            img: './images/icon-budgeting.svg',
            alt: 'simple budgeting',
            header: 'Simple Budgeting',
            content: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
        },
        {
            id: 3,
            img: './images/icon-onboarding.svg',
            alt: 'fast onboarding',
            header: 'Fast Onboarding',
            content: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
        },
        {
            id: 4,
            img: './images/icon-api.svg',
            alt: 'open API',
            header: 'Open API',
            content: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
        }
    ]

    return ( 
        <section className="highlights">
            <div className="highlights__container">
                <h2 className="highlights__heading">
                    Why choose Easybank?
                </h2>
                <p className="highlights__introduction">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <div className="highlights__items">
                {highlight.map(item => 
                    <Highlight 
                        key={item.id} 
                        src={item.img} 
                        alt={item.alt} 
                        header={item.header} 
                        content={item.content}
                    />
                )}
            </div>
        </section>
     );
}
 
export default Highlights;