import './Post.css';
import Posts from '../../../temp-data/posts.json';
import Button from '../../shared/button/Button';

import { ArrowDownward, ArrowUpward, ModeComment, TurnSlightRight, Bookmark, MoreHoriz } from '@mui/icons-material';
import Video from './video/Video';


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
              
            <div className="post-body">
            <span className="title">{post.title}</span>
            {post.video_src && <Video src={post.video_src} duration={post.duration}/>}
            {post.image_src && <img src={post.image_src} />}
            {post.description && <span className="description">{post.description}</span>}
           </div>
              
              
           <div className='post-footer'>
              <div className="comments footer-action">
                <ModeComment className="comment-icon" />
                <span>{post.comments} Comments</span>
              </div>
              
              <div className="share footer-action">
                <TurnSlightRight />
                <span>Share</span>
              </div>

              <div className="save footer-action">
                <Bookmark />
                <span>Save</span>
              </div>

              <MoreHoriz className="more-icon footer-action" />
          
            </div>

          </div>
           ))}
        </div>
    );
}

export default Post;
