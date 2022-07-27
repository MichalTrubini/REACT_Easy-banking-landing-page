const Highlight = (props) => {
    return ( 
        
        <div className="highlight">
            <img className="highlight__image" src={props.src} alt={props.alt}/>
            <h3 className="highlight__header">{props.header}</h3>
            <p className="highlight__text">{props.content}</p>
        </div> 
    
    );
}
 
export default Highlight;