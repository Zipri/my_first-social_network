import React from 'react';
import s from './ErrorForm.module.css'

const ErrorForm = (props) => {
    console.log(props.error)
    return <div className={s.errorWindow}>
        <div className={s.exitButton}>
            <button onClick={props.resetError}>X</button>
        </div>
        <div className={s.errorMessage}>
            {props.error.toString()}
        </div>
    </div>
};

export default ErrorForm;