import './Mainbar.css';
import Post from "../../../shared/post/Post";
import { MoreHoriz, Menu, TrendingUp, ArrowDropDown, ExpandMore, NewReleases, Whatshot } from '@mui/icons-material'

function Mainbar(){
    return <div className='mainbar'>
        
    
        <div className='filter-container'>
            <div className='filter-element hoverable'> 
                <Whatshot/> 
              <span>Hot</span>
            </div>

            <div className='filter-element hoverable'> 
                <span> Everywhere</span> 
                <ArrowDropDown/> 
            </div>

            <div className='filter-element-secondary hoverable'>
                 <NewReleases/>
                 <span>New</span>  
            </div>
            
            <div className='filter-element-secondary hoverable'>
                 <TrendingUp/> <span>Top</span> 
            </div>
            
            
        <MoreHoriz className='filter-element-tertiary'/> 
            
        <div className='spacer'>

        </div>
        
        <div className='filter-element-menu hoverable'> 
            <Menu/> 
            <ExpandMore/> 
        </div>

        </div>

        <Post/>
    
    </div>;
}

export default Mainbar;