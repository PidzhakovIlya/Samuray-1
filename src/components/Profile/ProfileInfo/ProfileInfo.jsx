import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import usersPhoto from '../../../assets/images/users.png'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto }) => {
    if(!profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        };
    };

    return <div>
        <div className={s.discriptionBlock}>
            <img src={profile.photos.large || usersPhoto} className = {s.mainPhoto} />
            {isOwner && <input type = {'file'} onChange = {onMainPhotoSelected}/>}
            <br />{profile.aboutMe}
            <ProfileStatusWithHooks status={status} updateStatus= {updateStatus}/>
        </div>

    </div>;
}

export default ProfileInfo;