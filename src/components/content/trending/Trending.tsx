import './Trending.css';
import trendingitems from '../../../temp-data/trending-items.json';

function Trending(){
    return (
        <div className='trending'>
        <span className='title'>Trending today</span>
    
        <div className='items'>
        {trendingitems.map((item, index) => (
        <div className='trending-items hoverable'style={{backgroundImage: 
            `linear-gradient(to top, rgba(0, 0, 0, 0.8) 35%, transparent),
            url(${item.image_src})`
    
    }}>
        <div className='context'>
        <span className='item-title'>{item.title}</span>
        <span className='description'> {item.description}</span>

        <div className='subreddit'>
            <img src={item.subreddit.image_src} alt="" />
            r/{item.subreddit.name}
        </div>
        </div>
        </div>
        )
    )
}
        </div>  
        </div>
    );
}

export default Trending;