import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return <div className={s.item}>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/91/47/0e/avtar-india-tours-is.jpg" alt="" />
        {props.message}
        <div>
            <span>Like</span>{props.likesCount}
        </div>
    </div>;

}

export default Post;