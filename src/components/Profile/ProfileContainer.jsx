import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-Reducer';
import { Navigate, useLocation, useNavigate, useParams, } from "react-router-dom";
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { useEffect } from 'react';



const ProfileContainer = (props) => {    

    useEffect(() => {
        let userId = props.router.params.userId;
        if (userId === undefined) {
            userId = props.authorizedUserId;
        }
        if (!userId) {
            props.router.navigate('/login')
        }
        props.getUserProfile(userId)

        props.getStatus(userId)
    },[props.router.params.userId])

    // componentDidMount() {
    //    this.refreshProfile();
    // };
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //    this.refreshProfile()
    // };

    // return 
    //     if (!this.props.isAuth) {
    //         return <Navigate to={'/login'} />
    //     };
    return (
        <Profile {...props} profile={props.profile} status={props.status || '-----'} updateStatus={props.updateStatus} />
    )

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
};


export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
