import './Button.css';

interface Props{
    type: string;
    text: string;
}

function Button(props: Props){
    return <div className={`button ${props.type=="primary-button"? 'primary-button' : 'secondary-button'}`}>
        {props.text}
 </div>;
}

export default Button;