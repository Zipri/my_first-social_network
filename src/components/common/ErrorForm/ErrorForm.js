import React from 'react';
import s from './ErrorForm.module.css'
import {Button} from "antd";

const ErrorForm = (props) => {
    const error = props.error.toString() === "Error: Request failed with status code 403"
        ? `${props.error.toString()}, check API-KEY, if it correct - wait one hour`
        : props.error.toString()
    return <div className={s.errorWindow}>
        <div className={s.exitButton}>
            <Button onClick={props.resetError} style={{borderRadius: 13}}>X</Button>
        </div>
        <div className={s.errorMessage}>
            {error}
        </div>
    </div>
};

export default ErrorForm;