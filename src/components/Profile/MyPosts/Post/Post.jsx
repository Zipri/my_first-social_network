import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.item}>
			<img
				src='https://lh3.googleusercontent.com/proxy/RcLq1YVl5u3OKWL5Cm0PIOGt_KqvivA4JmaSYmAIhrSJd5-re95pldEeJfHXJpIk5MDy2QtTpgycb6o-yyENxncHBMincKY96E9hBz4l'/>
			{props.message}
			<span> 👍 {props.likes}</span>
		</div>
	)
}

export default Post;