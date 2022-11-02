import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus.jsx'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus }) => {
    if(!profile){
        return <Preloader/>
    }
    return <div>
        <div className={s.discriptionBlock}>
            <img src={profile.photos.large} alt="" />
            <br />{profile.aboutMe}
            <ProfileStatusWithHooks status={status} updateStatus= {updateStatus}/>
        </div>

    </div>;
}

export default ProfileInfo;