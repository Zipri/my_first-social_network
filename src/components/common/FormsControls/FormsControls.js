import React from 'react';
import s from './FormsControls.module.css';

export const Element = (Element) => ({input, meta, ...props}) => {
    const isError = meta.error && meta.touched
    return <>
        <Element {...input}
                 {...props}
                 className={isError && s.error}/>
        {isError && <div className={s.errorMessage}>{meta.error}</div>}
    </>
};

// export const Textarea = ({input, meta, ...props}) => {
// 	const isError = meta.error && meta.touched
// 	return <>
// 		<textarea {...input}
// 							{...props}
// 							className={isError && s.error}/>
// 		{isError && <div className={s.errorMessage}>{meta.error}</div>}
// 	</>
// };
//
// export const Input = ({input, meta, ...props}) => {
// 	const isError = meta.error && meta.touched
// 	return <>
// 		<input {...input}
// 					 {...props}
// 					 className={isError && s.error}/>
// 		{isError && <div className={s.errorMessage}>{meta.error}</div>}
// 	</>
// };

