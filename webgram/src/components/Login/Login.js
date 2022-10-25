import Entry from "../EntryBox/Entry";
import Logo from "../WebgramLogo/Logo";
import { Container, LoginContainer, LoginHeader, EntryContainers, SubmitContainer, SignupContainer, SignupLabel, Link, LogoContainer, TopDock } from "./styles";
import Button from "../Button/Button";
import LoginForm from "./login-form";

export default function Login(props) {
    return (
        <div className={"login-wrapper"}>
                <div className={"login-top-dock"}>
                    <div className={"logo-container"}>
                        <Logo/>
                    </div>
                </div>
                <div className={"login-container"}>
                    <h1>Log In</h1>
                    <LoginForm loginHandler={props.loginHandler}/>
                    <div className={"signup-container"}>
                        <span>Don't have an account? <a href="/register">Sign up</a></span>
                    </div>
                </div>
            </div>
    );
  }