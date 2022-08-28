import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css";

const UserStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => setStatus(props.status), [props.status])

    const onStatusChange = (e) => setStatus(e.currentTarget.value)
    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return <div>
        {props.isOwner
            ? <div className={s.status}>
                {!editMode
                    ? <div className={s.notActive}
                           onClick={activateEditMode}>{props.status || "..."}</div>
                    : <input onChange={onStatusChange}
                             autoFocus
                             onBlur={deactivateEditMode}
                             value={status}
                             className={s.active}/>
                }
            </div>
            : <div className={s.status}>
                <div className={s.notActive}>{props.status || "..."}</div>
            </div>
        }
    </div>
};

export default UserStatus;