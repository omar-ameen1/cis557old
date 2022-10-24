import React from 'react';
import {EntryContainers, SubmitContainer} from "./styles";
import Entry from "../EntryBox/Entry";
import LoginFormInput from "./login-form-input";

export default function LoginForm(props) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("email: " + email);
        console.log("password: " + password);
        props.loginHandler(email, password);
    }

    return (
        <form>
            <div className={"entry-container"}>
                <LoginFormInput isPassword={false} onChange={e => setEmail(e.target.value)}/>
                <LoginFormInput isPassword={true} onChange={e => setPassword(e.target.value)}/>
            </div>
            <SubmitContainer>
                <input className={"login-button"} type={"submit"} value={"Log In"} onClick={handleSubmit}/>
            </SubmitContainer>
        </form>
    );
}
