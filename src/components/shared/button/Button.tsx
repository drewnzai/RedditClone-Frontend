import './Button.css';


function Button(props: any){
    return <div className={`button ${props.primary? 'primary-button' : 'secondary-button'}`}>
        {props.label}
 </div>;
}

export default Button;