import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input } from '../../common/FormsControl/FormsControl';


const ProfileDataForm = ({ profile }) => {
    return <form>
     <div><button onClick={()=>{}}>save</button></div>
     <div>
         <b>Full name:</b>{createField('FullName', 'fullname', [], Input)}
     </div>
     <div>
         <b>Looking for a job:</b>{profile.lookingForAJob ? "Yes" : "No"}
         {createField('F', 'lookingForAJob', [], Input, {type: 'checkbox'})}
     </div>
     {profile.lookingForAJob &&
         <div>
             <b>My professional skils:</b>{profile.lookingForAJobDescription}
         </div>
     }
     <div>
         <b>About me:</b>{profile.aboutMe}
     </div>
     {/* <div>
         <b>Contacts:</b>: {Object.keys(profile.contacts).map(key => {
             return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
         })}
     </div> */}
     <div>{profile.aboutMe}</div>
     <br />
 </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;