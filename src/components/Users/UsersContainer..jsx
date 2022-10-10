import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, toggleFollowingProgress, getUsers, follow, unFollow } from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'} />
        };
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followingInProgress={this.props.followingInProgress} />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}


export default compose(
    connect(mapStateToProps, { setCurrentPage, toggleFollowingProgress, getUsers, follow, unFollow, }),
    WithAuthRedirect
)(UsersContainer)


