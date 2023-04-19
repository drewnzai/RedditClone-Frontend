import "./Landing.css"
import Navbar from "./navbar/Navbar";
import Content from "./content/Content";
import Sidepane from '../shared/sidepane/Sidepane';

function Landing(){
    return ( <div>
        <Navbar/>
        
        <div className="landing-content">
            
        <Sidepane/>        
        <Content/>
        
        </div>
        </div>

    );
}



export default Landing;
