import "./Actions.css";
import QrCodeScannerSharpIcon from '@mui/icons-material/QrCodeScannerSharp';

function Actions(){
    return <div className="actions">
        <div>
        <QrCodeScannerSharpIcon/>
            Get App
            </div>
        <div>Log In</div>
        <div>Profile</div>
    </div>;
}

export default Actions;