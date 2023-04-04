import './Post.css';
import Posts from '../../../temp-data/posts.json';

function Post(){
    return (
        <div className='post-wrapper'>
            {Posts.map((post, index) => (
                <div>
                    {post.title}
                </div>
            ))}
        </div>
    );
}

export default Post;