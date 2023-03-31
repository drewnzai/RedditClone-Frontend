import "./Landing.css"
import Navbar from "./navbar/Navbar";
import Sidepane from '../sidepane/Sidepane';
import Content from "../content/Content";

function Landing(){
    return (<div>
        <Navbar/>
        <Sidepane/>
        <Content/>
    </div>
    

    );
}



export default Landing;