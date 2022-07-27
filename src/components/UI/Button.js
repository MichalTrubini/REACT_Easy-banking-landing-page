const Button = (props) => {

    const buttonClass = props.className + ' button'

    return ( 
        <button className={buttonClass}>{children}</button>
     );
}
 
export default Button;