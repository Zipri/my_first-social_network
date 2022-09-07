import React from 'react';
import s from './ErrorForm.module.css'
import {Button} from "antd";

const ErrorForm = (props) => {
    return <div className={s.errorWindow}>
        <div className={s.exitButton}>
            <Button onClick={props.resetError} style={{borderRadius: 13}}>X</Button>
        </div>
        <div className={s.errorMessage}>
            {props.error.toString()}
        </div>
    </div>
};

export default ErrorForm;