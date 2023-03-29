import "./Actions.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from "../button/Button";

function Actions(){
    return <div className="actions">
        <Button primary label="Get App"/>
        <Button label="Log In"/>
        <div className="profile">
            <PersonOutlineOutlinedIcon/>
            <ArrowDropDownIcon/>
            </div>
    </div>;
}

export default Actions;