import './Mainbar.css';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Mainbar(){
    return <div className='mainbar'>
        
    
        <div className='filter-container'>
            <div className='filter-element hoverable'> 
                <WhatshotIcon/> 
              <span>Hot</span>
            </div>

            <div className='filter-element hoverable'> 
                <span> Everywhere</span> 
                <ArrowDropDownIcon/> 
            </div>

            <div className='filter-element-secondary hoverable'>
                 <NewReleasesIcon/>
                 <span>New</span>  
            </div>
            
            <div className='filter-element-secondary hoverable'>
                 <TrendingUpIcon/> <span>Top</span> 
            </div>
            
            
        <MoreHorizIcon className='filter-element-tertiary'/> 
            
        <div className='spacer'>

        </div>
        
        <div className='filter-element-menu hoverable'> 
            <MenuIcon/> 
            <ExpandMoreIcon/> 
        </div>

        </div>
    
    
    </div>;
}

export default Mainbar;