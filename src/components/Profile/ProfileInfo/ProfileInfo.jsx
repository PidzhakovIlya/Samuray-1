import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus.jsx'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return <div>

        {/* <div className={s.item}>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="" />
        </div> */}
        <div className={s.discriptionBlock}>
            <img src={props.profile.photos.large} alt="" />
            <br />{props.profile.aboutMe}
            <ProfileStatusWithHooks status={props.status} updateStatus= {props.updateStatus}/>
        </div>

    </div>;
}

export default ProfileInfo;