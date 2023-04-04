import "./Landing.css"
import Navbar from "./navbar/Navbar";
import Content from "../content/Content";

function Landing(){
    return ( <div>
        <Navbar/>
        <div className="landing-content">
            <div className="sidepane">
                <div className="sd-content"> test</div>
            </div>
            
        
        
        <Content/>
        </div>
        </div>
        
        
    

    );
}



export default Landing;