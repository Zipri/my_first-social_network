import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import FollowControl from "../common/FollowControl/FollowControl";
import s from './Users.module.css';
import cn from "classnames";

const Button = (props) => {
    return <div>
        <div>
            <FollowControl userId={props.user.id}
                           userFollowed={props.user.followed}
                           followingInProgress={props.followingInProgress}
                           followingUser={props.followingUser}
                           unfollowingUser={props.unfollowingUser}/>
        </div>
        <div>
            <NavLink to={"/profile/" + props.user.id} target="_blank">
                <div className={s.button}>New tab</div>
            </NavLink>
        </div>
    </div>
};

const UserLabel = (props) => {
    return <div className={s.user}>
        <NavLink to={"/profile/" + props.u.id}>
            <img src={props.u.photos.large} alt={"user photo"}/>
        </NavLink>
        <div className={s.userTextDescription}>
            <div className={s.userFullName}>
                {props.u.name}
            </div>
            <div className={s.userStatus}>
                {props.u.status}
            </div>
        </div>
    </div>
};

const PageSlider = (props) => {
    let portionSize = 7
    let portionCount = Math.ceil(props.pages.length / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let left = (portionNumber - 1) * portionSize + 1
    let right = portionNumber * portionSize

    return <div className={s.slider}>

        {portionNumber > 1 &&
            <button className={s.pageButton} onClick={() => setPortionNumber(1)}>❮❮</button>}
        {portionNumber > 1 &&
            <button className={s.pageButton} onClick={() => setPortionNumber(portionNumber - 1)}>❮</button>}

        {
            props.pages.filter(p => p >= left && p <= right)
                .map(p => <span>
					<button onClick={() => props.onPageChanged(p)}
                            className={// props.currentPage === p && s.selected || s.pageButton
                                cn(s.pageButton, {[s.selected]: props.currentPage === p})}>
                        {p}
					</button>
				</span>)
        }

        {portionNumber < portionCount &&
            <button className={s.pageButton} onClick={() => setPortionNumber(portionNumber + 1)}>❯</button>}
        {portionNumber < portionCount &&
            <button className={s.pageButton} onClick={() => setPortionNumber(portionCount)}>❯❯</button>}

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
        <div className={s.label}>{props.isAuth
            ? `Friends (${props.totalFriendsCount}):`
            : "Please Login to see your friends"}</div>
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
    return <div className={s.flexAll}>
        <UsersList pages={props.pages}
                   onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage}
                   users={props.users}
                   followingInProgress={props.followingInProgress}
                   followingUser={props.followingUser}
                   unfollowingUser={props.unfollowingUser}/>
        <FriendsList isAuth={props.isAuth}
                     friends={props.friends}
                     totalFriendsCount={props.totalFriendsCount}
                     followingInProgress={props.followingInProgress}
                     followingUser={props.followingUser}
                     unfollowingUser={props.unfollowingUser}/>
    </div>
};

export default Users;