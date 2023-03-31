import Actions from "./actions/Actions";
import Logo from "./logo/Logo";
import Searchbar from "./searchbar/Searchbar";
import "./Navbar.css";

function Navbar(){
    return <div className="navbar">
        <Logo/>
        <Searchbar/>
        <Actions/>
    </div>;
}

export default Navbar;