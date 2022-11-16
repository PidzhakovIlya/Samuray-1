import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import usersPhoto from '../../../assets/images/users.png'
import { useState } from 'react';
import ProfileDataFormReduxForm from './ProfileDataForm';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        };
    };

    const onSubmit = (formData) =>{
       saveProfile(formData).then(()=>{
           setEditMode(false)
       })
    };

    return <div>
        <div className={s.discriptionBlock}>
            <img src={profile.photos.large || usersPhoto} className={s.mainPhoto} />
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />};
        </div>
        {editMode ?
            <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit = {onSubmit}/> :
            <ProfileData profile={profile} isOwner = {isOwner} goToEditMod={()=>{setEditMode(true)}}/>};
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>;
}

export const Contact = ({ contactTitle, contactValue }) => {

    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
};

const ProfileData = ({ profile, isOwner, goToEditMod }) => {
    return <div>
       { isOwner && <div><button onClick={goToEditMod}>Edit</button></div>}
        <div>
            <b>Full name:</b>{profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b>{profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skils:</b>{profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me:</b>{profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}

export default ProfileInfo;