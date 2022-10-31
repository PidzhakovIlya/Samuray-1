import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../Utils/validators/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';
import s from './MyPosts.module.css';
import Post from './Post/Post ';

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {
    // console.log('yo');
    let posts = props.posts.map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount} />)

    const addNewPost = (values) => {
        props.addPost(values.addMyPost)
    }
    return (
        <div className={s.MyPosts}>
            <h3>My Posts</h3>
            <div className={s.posts}>
                <AddMyPostRedux onSubmit={addNewPost} />
                {posts}
            </div>
        </div>
    )
}
)

const addMyPost = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='addMyPost' placeholder='Enter your message' validate={[required, maxLength10]} />
            <div>
                <button >Add Post</button>
            </div>

        </form>
    )
}
const AddMyPostRedux = reduxForm({ form: 'postAddMesageForm' })(addMyPost);

export default MyPosts;