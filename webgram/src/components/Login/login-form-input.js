import React from 'react';

export default function LoginFormInput(props) {
    const isPassword = props.isPassword;
    if (isPassword) {
        return (
            <>
                <label className={"login-label"}>Password</label>
                <input className={"login-input"} type={"password"} onChange={props.onChange}/>
            </>
        );
    } else {
        return (
            <>
                <label className={"login-label"}>Email</label>
                <input className={"login-input"} type={"text"} onChange={props.onChange}/>
            </>
        );
    }
}
