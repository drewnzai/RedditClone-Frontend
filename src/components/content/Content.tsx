import './Content.css';
import Trending from './trending/Trending';
import Sidebar from './sidebar/Sidebar';
import Mainbar from './mainbar/Mainbar';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Content(){
    return (
    <div className='content'>
        
    <Trending/>

    <div className='bars-wrapper'>
        <Mainbar/>
        <Sidebar/>
    </div>
    </div>
    );
}

export default Content;