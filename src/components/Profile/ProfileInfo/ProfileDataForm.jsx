import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControl/FormsControl';
import s from './ProfileInfo.module.css';
import style from "../../common/FormsControl/FormsControl.module.css"

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={style.formSummeryError}>
                {error}
             </div>}
     <div><button>save</button></div>
     <div>
         <b>Full name</b>:
         {createField('FullName', 'fullname', [], Input)}
     </div>
     <div>
         <b>Looking for a job: </b>
         {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
     </div>
     
         <div>
             <b>My professional skils: </b>
         {createField('My professional skils', 'lookingForAJobDescription', [], Textarea,)}

         </div>
     
     <div>
         <b>About me: </b>:
         {createField('About me', 'aboutMe', [], Textarea,)}
     </div>
      <div>
         <b>Contacts:</b>: {Object.keys(profile.contacts).map(key => {
             return <div key = {key} className={s.contact}>
                <b>{key}: {createField(key, 'contacts.'+ key, [], Input)}</b>
             </div>
         })}
     </div>
 </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;