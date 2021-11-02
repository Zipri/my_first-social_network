import React from 'react'
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../store-context";

const MyPostsContainer = (props) => {

	return <StoreContext.Consumer>
			{store => {
					let state = store.getState()

					let addPost = () => {
						store.dispatch(addPostActionCreator())
					}

					let updateNewPostText = (text) => {
						store.dispatch(updateNewPostTextActionCreator(text))
					}

					return (
						<MyPosts
							newPostText={state.profilePage.newPostText}
							posts={state.profilePage.posts}

							changeNewPost={updateNewPostText}
							addNewPost={addPost}
						/>
					)
				}
			}
		</StoreContext.Consumer>

}

export default MyPostsContainer;