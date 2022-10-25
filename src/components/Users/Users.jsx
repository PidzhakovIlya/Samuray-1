import React from "react";
import style from './Users.module.css';
import usersPhoto from '../../assets/images/users.png'
import { NavLink } from "react-router-dom";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.page === p && style.SelectedPage}
                    onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {
            props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={style.imgs} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unFollow(u.id)
                            }}>
                                unFollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>
                                Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.sity'}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
}
export default Users;