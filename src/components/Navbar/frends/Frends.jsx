import React from 'react';
import s from './Friends.module.css'


const Friends = (props) => {

 
    return (
        <div className={s.ff}>
            {props.img}{props.name}
        </div>
    )

}

export default Friends;