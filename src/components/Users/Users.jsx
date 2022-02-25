import React from 'react';
import {NavLink} from "react-router-dom";

import s from './Users.module.css';

const FollowButton = (props) => {
    return <button className={s.button}
                   disabled={props.followingInProgress.some(id => id === props.userId)}
                   onClick={() => props.followingUser(props.userId)}>✔️ Follow
    </button>
};

const UnfollowButton = (props) => {
    return <button className={s.button}
                   disabled={props.followingInProgress.some(id => id === props.userId)}
                   onClick={() => props.unfollowingUser(props.userId)}>❌ Unfollow
    </button>
};
//TODO заебал код дулбировать - исправляй нахуй эту ссанину ещё и в profile

const Button = (props) => {
    return <div>
        <div>
            {props.user.followed
                ? <UnfollowButton userId={props.user.id}
                                  followingInProgress={props.followingInProgress}
                                  unfollowingUser={props.unfollowingUser}/>
                : <FollowButton userId={props.user.id}
                                followingInProgress={props.followingInProgress}
                                followingUser={props.followingUser}/>}
        </div>
        <div>
            <NavLink to={"/profile/" + props.user.id} target="_blank">
                <button className={s.button}>New tab</button>
            </NavLink>
            {/*	TODO переделай этот позор..............*/}
        </div>
    </div>
};

const UserLabel = (props) => {
    return <div className={s.user}>
        <NavLink to={"/profile/" + props.u.id} className={s.min}>
            <img src={props.u.photos.large != null
                ? props.u.photos.large
                : 'https://slovnet.ru/wp-content/uploads/2018/12/7-67.jpg'}/>
        </NavLink>

        <div className={s.userTextDescription}>
            <div className={s.userFullName}>
                {/*{props.u.firstName + ' ' + props.u.lastName}*/}
                {props.u.name}
            </div>
            <div className={s.userStatus}>
                {props.u.status}
            </div>
            <div className={s.userLocation}>
                <splan>
                    <div className={s.cityCountry}>
                        <div>City:</div>
                        <div>Country:</div>
                    </div>
                    <div className={s.userCityCountry}>
                        <div>props.u.location.city</div>
                        <div>props.u.location.country</div>
                    </div>
                </splan>
            </div>
        </div>
    </div>
};

const PageSlider = (props) => {
    return <div className={s.slider}>
        <button className={s.pageButton}>❮</button>
        {props.pages.map(p => <span>
					<button
                        onClick={() => props.onPageChanged(p)}
                        className={props.currentPage === p && s.selected || s.pageButton}>
							{p}
					</button>
				</span>)}
        <button className={s.pageButton}>❯</button>
    </div>
};

const UsersList = (props) => {
    return <div className={s.users}>
        <div className={s.label}>Guys:</div>
        <PageSlider pages={props.pages}
                    onPageChanged={props.onPageChanged}
                    currentPage={props.currentPage}/>
        {props.users.map(user =>
            <div key={user.id} className={s.flex}>
                <UserLabel u={user}/>
                <Button user={user}
                        followingInProgress={props.followingInProgress}
                        followingUser={props.followingUser}
                        unfollowingUser={props.unfollowingUser}/>
            </div>
        )}
    </div>
};

const FriendsList = (props) => {
    return <div className={s.friends}>
        <div className={s.label}>{props.isAuth ? "Friends:" : "Please Login to see your friends"}</div>
        {props.friends.map(friends => {
            return <div key={friends.id} className={s.flex}>
                <UserLabel u={friends}/>
                <Button user={friends}
                        followingInProgress={props.followingInProgress}
                        followingUser={props.followingUser}
                        unfollowingUser={props.unfollowingUser}/>
            </div>
        })}
    </div>
};

const Users = (props) => {
    return <div className={s.flex}>
        <UsersList pages={props.pages}
                   onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage}
                   users={props.users}
                   followingInProgress={props.followingInProgress}
                   followingUser={props.followingUser}
                   unfollowingUser={props.unfollowingUser}/>
        <FriendsList isAuth={props.isAuth}
                     friends={props.friends}
                     followingInProgress={props.followingInProgress}
                     followingUser={props.followingUser}
                     unfollowingUser={props.unfollowingUser}/>
    </div>
};

export default Users;