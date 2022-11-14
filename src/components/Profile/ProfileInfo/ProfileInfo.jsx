import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import usersPhoto from '../../../assets/images/users.png'

const ProfileInfo = ({profile, status, updateStatus }) => {
    if(!profile){
        return <Preloader/>
    }
    return <div>
        <div className={s.discriptionBlock}>
            <img src={profile.photos.large || usersPhoto} className = {s.mainPhoto} />
            <br />{profile.aboutMe}
            <ProfileStatusWithHooks status={status} updateStatus= {updateStatus}/>
        </div>

    </div>;
}

export default ProfileInfo;