import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, savePhoto, saveProfile, updateStatus } from '../../redux/profile-Reducer';
import { Navigate, useLocation, useNavigate, useParams, } from "react-router-dom";
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { useEffect } from 'react';



const ProfileContainer = (props) => {
    let params = useParams();
    let navigate = useNavigate();
    let userId = params.userId;
    useEffect(() => {
        if (!userId ) {
            
            userId = props.authorizedUserId;
            if (!userId) {
               <Navigate to='/login'/>;
            }
        }
        props.getUserProfile(userId)

        props.getStatus(userId)
    }, [userId])

    return (
        <Profile {...props}
            isOwner={props.authorizedUserId == userId}
            profile={props.profile}
            status={props.status || '-----'}
            updateStatus={props.updateStatus} 
            savePhoto = {props.savePhoto}/>
    )

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }

//     return ComponentWithRouterProp;
// };


export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    // withRouter,
    
    WithAuthRedirect
)(ProfileContainer);
