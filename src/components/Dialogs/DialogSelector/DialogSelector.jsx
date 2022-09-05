import React from "react";

import s from './DialogSelector.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog}>
        <img src={props.photo}
             alt={"friend photo"}/>
        <NavLink to={"/dialogs/" + props.id}>
            <div className={s.dialogText}>
                {props.name}
            </div>
        </NavLink>
    </div>
}

const DialogSelector = (props) => {
    console.log(window.location.href.split("/"))
    return <div className={s.dialogs}>
        {props.friends.map(d => <DialogItem name={d.name} id={d.id} photo={d.photos.small}/>)}
    </div>
}

export default DialogSelector;