import '../../assets/css/article.css';

const Article = (props) => {
    return ( 
        <div className="article">
            <div className="article__img-container">
                <img className="article__img" src={props.src} alt={props.alt}/>
            </div>
            <div className="article__content-container">
                <p className="article__author">{'By ' + props.author}</p>
                <h3 className="article__header">{props.header}</h3>
                <p className="article__content">{props.content}</p>
            </div>
        </div>
     );
}
 
export default Article;