import '../../assets/css/button.css';

const Button = (props) => {

    const buttonClass = props.className + ' button'

    return ( 
        <button className={buttonClass}>{props.children}</button>
     );
}
 
export default Button;