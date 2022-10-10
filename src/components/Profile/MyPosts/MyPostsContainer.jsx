import { connect } from 'react-redux';
import { addPostActionCreator,} from '../../../redux/Profile-Reducer';
import MyPosts from './MyPosts';



    let mapStateToProps = (state) =>{
        return{
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText,
        }
    }
    let mapDispatchToProps = (dispatch) =>{
        return{
            addPost: (addMyPost) =>{
                dispatch(addPostActionCreator(addMyPost))
            }
        }
    }
    
    
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;