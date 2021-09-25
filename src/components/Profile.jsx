import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src='https://gazetaingush.ru/sites/default/files/pubs/obshchestvo/2021/05/priroda-ingushetii-1200x5401.jpg'/>
			</div>
			<div>
				<img src='https://lh3.googleusercontent.com/proxy/aPah90hgPI4g6fBEiFVQyq_2t89TVpc1LGuF2n5Utw4_wIK6VOPbL28NBB60Bc9eNOTQ4svUBxmV3JtXEvrMwVRdhVaUcn2gPsPjMqtCNNBAdNpwAeg5rQ1wsh83phim7g0EzwdOfXM'/>
				ava + description
			</div>
			<div>
				my posts
				<div>
					new posts
				</div>
			</div>
			<div>
				<div className={s.item}>
					post 1
				</div>
				<div className={s.item}>
					post 2
				</div>
			</div>
		</div>
	)
}

export default Profile;