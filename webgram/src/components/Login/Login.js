import Entry from "../EntryBox/Entry";
import Logo from "../WebgramLogo/Logo";
import { Container, LoginContainer, LoginHeader, EntryContainers, SubmitContainer, SignupContainer, SignupLabel, Link, LogoContainer, TopDock } from "./styles";
import Button from "../Button/Button";
import LoginForm from "./login-form";

export default function Login(props) {
    return (
        <Container>
                <TopDock>
                    <LogoContainer>
                        <Logo/>
                    </LogoContainer>
                </TopDock>
                <LoginContainer>
                    <LoginHeader>Log In</LoginHeader>
                    <LoginForm loginHandler={props.loginHandler}/>
                    <SignupContainer>
                        <SignupLabel>Don't have an account? <Link href="/register">Sign up</Link></SignupLabel>
                    </SignupContainer>
                </LoginContainer>
            </Container>
    );
  }