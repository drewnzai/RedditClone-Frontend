import './Content.css';
import Trending from './trending/Trending';
import Sidebar from './sidebar/Sidebar';
import Mainbar from './mainbar/Mainbar';


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