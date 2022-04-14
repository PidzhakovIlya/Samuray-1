import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post ';
import postsData from '../Profile' 

const MyPosts = (props) => {
   
    let posts = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />)

    return <div className={s.MyPosts}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>

                <button>Add Post</button>
            </div>

        </div>
        <div className={s.posts}>
            {posts}
        </div>
    </div>;

}

export default MyPosts;