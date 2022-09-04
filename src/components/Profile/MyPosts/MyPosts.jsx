import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Element} from "../../common/FormsControls/FormsControls";
import s from './MyPosts.module.css';


const Post = (props) => <div className={s.post}>
    <img src={props.photo} alt={"avatar"}/>
    <div className={s.postText}>
        <div>{props.postMessage}</div>
        <div className={s.likes}> 👍 {props.likes}</div>
    </div>
</div>

const Textarea = Element("textarea")
const maxLength50 = maxLengthCreator(50)
const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.addPost}>
        <Field name={"newPostBody"}
               component={Textarea}
               placeholder="Write a new post..."
               validate={[requiredField, maxLength50]}
        />
        <button>Add</button>
    </form>
}
const MyPostsReduxForm = reduxForm({form: "profileNewPostForm"})(MyPostsForm)

const MyPosts = (props) => {
    const addPost = (values) => props.addPost(values.newPostBody)
    return <div className={s.myPosts}>
        <MyPostsReduxForm onSubmit={addPost}/>
        {props.posts.map(p => <Post postMessage={p.postMessage}
                                    likes={p.likes}
                                    id={p.id}
                                    photo={props.profile.photos.small}/>)}
    </div>
}

export default MyPosts;