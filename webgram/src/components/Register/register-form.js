import React from 'react';
import RegisterFormInput from "./register-form-input";
import {SubmitContainer} from "./styles";
import Button from "../Button/Button";

export default function RegisterForm(props) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("email: " + email);
        console.log("password: " + password);
        console.log("username: " + username);
        props.registrationHandler(email, username, password);
    }

    return (
        <form>
            <div className={"entry-container"}>
                <RegisterFormInput isEmail={true} onChange={e => setEmail(e.target.value)}/>
                <RegisterFormInput onChange={e => setUsername(e.target.value)}/>
                <RegisterFormInput isPassword={true} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className={"register-button-container"}>
                <input className={"register-button"} type={"submit"} value={"Register"} onClick={handleSubmit}/>
            </div>
        </form>
    );
}
