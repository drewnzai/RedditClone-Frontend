import "./Landing.css"
import Navbar from "./navbar/Navbar";
import Content from "./content/Content";
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import OutboundIcon from '@mui/icons-material/Outbound';

function Landing(){
    return ( <div>
        <Navbar/>
        <div className="landing-content">
            
            <div className="sidepane">
                <div className="sd-content"> 
                
                 
                 <div className="topic">
                 
                 <span>FEEDS</span>
                 
                 <div className="item">
                  
                  <a href="">
                 <HomeOutlined /> 
                 <span>Home</span>	
                 </a>

                 </div>
                 
                

                </div>
            </div>
            </div>
        
        
        <Content/>
        </div>
        </div>
        
        
    

    );
}



export default Landing;
