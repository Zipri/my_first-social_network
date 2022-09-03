import React from 'react';

const ErrorForm = (props) => {
    console.log(props.error)
    return <div>
        {props.error.toString()}
    </div>
};

export default ErrorForm;