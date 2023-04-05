import './Content.css';
import Trending from './trending/Trending';
import Sidebar from './sidebar/Sidebar';
import Mainbar from './mainbar/Mainbar';


function Content(){
    return (
    <div className='content'>
        
    <Trending/>

    <div className='bars-wrapper'>
    <span className='popular-posts-title'>Popular posts</span>
    
    <div className='inside'>
        <Mainbar/>
        <Sidebar/>
    </div>

    </div>
    </div>
    );
}

export default Content;