import './Button.css';
import QrCodeScannerSharpIcon from '@mui/icons-material/QrCodeScannerSharp';

interface Props{
    primary?: boolean;
    label: string;
}

export default function Button({primary, label}: Props){
    if(primary){
        
        return <div className="button primary-button">
               <QrCodeScannerSharpIcon/>         
               &nbsp;
            {label}
            
            </div>;
    
    } 
    else
    
    return <div className="button secondary-button">
        
        {label}
        
        </div>;
}