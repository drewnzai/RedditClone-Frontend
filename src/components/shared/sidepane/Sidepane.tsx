import './Sidepane.css';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import OutboundIcon from '@mui/icons-material/Outbound';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import BarChartIcon from '@mui/icons-material/BarChart';
import TollIcon from '@mui/icons-material/Toll';
import TvIcon from '@mui/icons-material/Tv';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Sidepane(){
    return(
        <div className="sidepane">
                <div className="sd-content"> 
                
                 
                 <div className="item-group">
                 
                 <span>FEEDS</span>
                 
                 <div className="items">
                  
                  <a href="">
                 <HomeOutlined /> 
                 <span>Home</span>	
                 </a>
                
                  <a href="">
                    <OutboundIcon/>
                    <span>Popular</span>
                  </a>
                 </div>
                 
                
                
                </div>

                <div className="item-group">
                 
                 <span>TOPICS</span>
                 
                 <div className="items">
                  
                    <div className="item">
                        <SportsEsportsIcon/>
                        <span>Gaming</span>
                        <ExpandMoreIcon/>
                    </div>
                  
                    <div className="item">
                        <SportsBaseballIcon/>
                        <span>Sports</span>
                        <ExpandMoreIcon/>
                    </div>

                    <div className="item">
                        <BarChartIcon/>
                        <span>Business</span>
                        <ExpandMoreIcon/>
                    </div>

                    <div className="item">
                        <TollIcon/>
                        <span>Crypto</span>
                        <ExpandMoreIcon/>
                    </div>

                    <div className="item">
                        <TvIcon/>
                        <span>Television</span>
                        <ExpandMoreIcon/>
                    </div>

                    <div className="item">
                        <StarBorderIcon/>
                        <span>Celebrities</span>
                        <ExpandMoreIcon/>
                    </div>

                    <div className="item">
                        <MoreHorizIcon/>
                        <span>More Topics</span>
                        <ExpandMoreIcon/>
                    </div>
                 </div>
                 
                
                
                </div>

            </div>
            </div>
    );
}

export default Sidepane;