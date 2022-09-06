import React, {useEffect, useState} from "react";

import s from './DialogSelector.module.css'
import {NavLink} from "react-router-dom";
import cn from "classnames";

const DialogItem = (props) => {
    return <div className={cn(
        s.dialog,
        {[s.dialogCurrent]: props.currentURL === props.id.toString()}
    )}>
        <img src={props.photo}
             alt={"friend photo"}/>
        <NavLink to={"/dialogs/" + props.id} onClick={
            () => props.setUrl(props.id.toString())
        }>
            <div className={s.dialogText}>
                {props.name}
            </div>
        </NavLink>
    </div>
}

const DialogSelector = (props) => {
    return <div className={s.dialogs}>
        {props.friends.map(d => <DialogItem name={d.name}
                                            id={d.id}
                                            photo={d.photos.small}
                                            setUrl={props.setUrl}
                                            currentURL={props.url}/>)}
    </div>
}

export default DialogSelector;