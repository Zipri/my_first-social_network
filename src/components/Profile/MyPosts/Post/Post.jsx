import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src='https://goldenmost.ru/wp-content/uploads/2017/07/Kon2.jpg'/>
			<div className={s.text}>
				<div>{props.message}</div>
				<div> 👍 {props.likes}</div>
			</div>
		</div>
	)
}

export default Post;