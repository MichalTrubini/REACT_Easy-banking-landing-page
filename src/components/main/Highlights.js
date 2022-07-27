import Highlight from "./Highlight";

const Highlights = () => {

    const highlight = [
        {
            img: '.\images\icon-online.svg',
            alt: 'online banking',
            header: 'Online Banking',
            content: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            img: '.\images\icon-budgeting.svg',
            alt: 'simple budgeting',
            header: 'Simple Budgeting',
            content: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
        },
        {
            img: '.\images\icon-onboarding.svg',
            alt: 'fast onboarding',
            header: 'Fast Onboarding',
            content: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
        },
        {
            img: '.\images\icon-api.svg',
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
                <p className="highligts__introduction"></p>
            </div>
            <div className="highlights__items">
                {highlight.map(item => <Highlight src={item.img} alt={item.alt} header={item.header} content={item.content}/>)}
            </div>
        </section>
     );
}
 
export default Highlights;