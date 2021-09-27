import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.item}>
			<img
				src='https://goldenmost.ru/wp-content/uploads/2017/07/Kon2.jpg'/>
			{props.message}
			<span> 👍 {props.likes}</span>
		</div>
	)
}

export default Post;