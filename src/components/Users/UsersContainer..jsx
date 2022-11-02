import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, toggleFollowingProgress, requestUsers, follow, unFollow } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        const {page, pageSize} = this.props;
        this.props.requestUsers(page, pageSize);
    }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'} />
        };
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                page={this.props.page}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followingInProgress={this.props.followingInProgress} />
        </>
    }

}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,

//     }
// }

let mapStateToProps = (state) => {
        return {
            users: getUsers(state),
            pageSize: getPageSize(state),
            totalUsersCount: getTotalUsersCount(state),
            page: getCurrentPage(state),
            isFetching: getIsFetching(state),
            followingInProgress: getFollowingInProgress(state),
    
        }
    }


export default compose(
    connect(mapStateToProps, { setCurrentPage, toggleFollowingProgress, requestUsers, follow, unFollow, }),
    WithAuthRedirect
)(UsersContainer)


