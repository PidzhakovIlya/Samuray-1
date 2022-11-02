import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";



let Users = ({ page, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return <div>
        <Paginator page={page} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map((u) => <User key={u.id}
                    user={u}
                    followingInProgress={props.followingInProgress}
                    unFollow={props.unFollow}
                    follow={props.follow} />
                )
            }
        </div>
    </div>
}
export default Users;