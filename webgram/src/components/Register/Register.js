import Entry from "../EntryBox/Entry";
import Logo from "../WebgramLogo/Logo";
import { Container, LoginContainer, LoginHeader, EntryContainers, SubmitContainer, SignupContainer, SignupLabel, Link, LogoContainer, TopDock } from "./styles";
import Button from "../Button/Button";
import RegisterForm from "./register-form";

export default function Register(props) {
    return (
        <Container>
                <TopDock>
                    <LogoContainer>
                        <Logo/>
                    </LogoContainer>
                </TopDock>
                <LoginContainer>
                    <LoginHeader>Create a New Account</LoginHeader>
                    <RegisterForm registrationHandler={props.registrationHandler} />
                    <SignupContainer>
                        <SignupLabel>Already have an account? <Link href="/">Log In</Link></SignupLabel>
                    </SignupContainer>
                </LoginContainer>
            </Container>
    );
  }