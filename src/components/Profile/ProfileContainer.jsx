import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/Profile-Reducer';
import { Navigate, useLocation, useNavigate, useParams, } from "react-router-dom";
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (userId === undefined) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId)
            
        this.props.getStatus(userId)
      
    }
    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'} />
        };
        return (
            <Profile {...this.props} profile={this.props.profile} status = {this.props.status|| '-----'} updateStatus = {this.props.updateStatus}/>
        )
    }
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
   