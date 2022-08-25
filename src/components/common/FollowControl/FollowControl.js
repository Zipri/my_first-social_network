import React from 'react';
import s from "./FollowControl.module.css";

const FollowButton = (props) => {
    return <button className={s.btn}
                   disabled={props.followingInProgress.some(id => id === props.userId)}
                   onClick={() => props.followingUser(props.userId)}>✔️ Follow
    </button>
};

const UnfollowButton = (props) => {
    return <button className={s.btn}
                   disabled={props.followingInProgress.some(id => id === props.userId)}
                   onClick={() => props.unfollowingUser(props.userId)}>❌ Unfollow
    </button>
};

const FollowControl = (props) => {
    return <div>
        {props.userFollowed
            ? <UnfollowButton userId={props.userId}
                              followingInProgress={props.followingInProgress}
                              unfollowingUser={props.unfollowingUser}/>
            : <FollowButton userId={props.userId}
                            followingInProgress={props.followingInProgress}
                            followingUser={props.followingUser}/>}
    </div>
};

export default FollowControl;