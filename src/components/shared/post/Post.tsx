import './Post.css';
import Posts from '../../../temp-data/posts.json';
import Button from '../../shared/button/Button';

import { ArrowDownward, ArrowUpward, ModeComment, Share, Bookmark, MoreHoriz } from '@mui/icons-material';


function Post(){
    return (
        <div className='post-wrapper'>
           {Posts.map((post, index) => (
            <div className='post'>
              <div className='post-sidebar'>
                <ArrowUpward className='upvote'/>
                <span>{post.upvotes}</span>
                <ArrowDownward className='downvote'/>
              </div>

              <div className='post-title'>
              <img src={post.subreddit.image_src} />
               <span className="subreddit-name">r/{post.subreddit.name}</span>
               <span className="post-user">Posted by</span>
               <span className="post-user underline">u/{post.username}</span>
                
                <div className="spacer"></div>
                <Button label="Join" />
              </div>
              
              <div className='post-body'>


              </div>
              
              
              <div className='post-footer'>Footer</div>
            </div>
           ))}
        </div>
    );
}

export default Post;