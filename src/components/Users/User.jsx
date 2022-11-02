import React from "react";
import style from './Users.module.css';
import usersPhoto from '../../assets/images/users.png'
import { NavLink } from "react-router-dom";




let User = ({user, followingInProgress, unFollow, follow}) => {
    return <div>    
            <div >
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : usersPhoto} className={style.imgs} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unFollow(user.id)
                            }}>
                                unFollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>
                                Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.sity'}</div>
                    </span>
                </span>
            </div>     
    </div>
}
export default User;