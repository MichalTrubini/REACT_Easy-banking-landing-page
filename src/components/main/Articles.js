import Article from "./Article";

const Articles = () => {

    const articles = [
        {
            src: '.\images\image-currency.jpg',
            alt: 'currency',
            author: 'Claire Robinson',
            header: 'Receive money in any currency with no fees',
            content: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
        },
        {
            src: '.\images\image-restaurant.jpg',
            alt: 'restaurant',
            author: 'Wilson Hutton',
            header: 'Treat yourself without worrying about money',
            content: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
        },
        {
            src: '.\images\image-plane.jpg',
            alt: 'plane',
            author: 'Wilson Hutton',
            header: 'Take your Easybank card wherever you go',
            content: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
        },
        {
            src: '.\images\image-confetti.jpg',
            alt: 'confetti',
            author: 'Claire Robinson',
            header: 'Our invite-only Beta accounts are now live!',
            content: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
        }
    ]

    return ( 
        <section className="articles">
            <div className="articles__header-container">
                <h2 className="articles__header">Latest Articles</h2>
            </div>
            <div className="articles__items">
                {articles.map(article => 
                    <Article 
                        src={article.src} 
                        alt={article.alt} 
                        author={article.author} 
                        header={article.header} 
                        content={article.content}
                    />
                )}
            </div>
        </section>
     );
}
 
export default Articles;