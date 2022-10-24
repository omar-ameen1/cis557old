import Entry from "../EntryBox/Entry";
import Logo from "../WebgramLogo/Logo";
import { Container, LoginContainer, LoginHeader, EntryContainers, SubmitContainer, SignupContainer, SignupLabel, Link, LogoContainer, TopDock } from "./styles";
import Button from "../Button/Button";

export default function Login() {

    const LOGIN_LABEL = "Username or Email";
    const PASSWORD_LABEL = "Password";
    return (<Container>
                <TopDock>
                    <LogoContainer>
                        <Logo/>
                    </LogoContainer>
                </TopDock>
                <LoginContainer>
                    <LoginHeader>Log In</LoginHeader>
                    <EntryContainers>
                        <Entry labelName={LOGIN_LABEL}/>
                        <Entry labelName={PASSWORD_LABEL} isPassword={true}/>
                    </EntryContainers>
                    <SubmitContainer>
                        <Button/>
                    </SubmitContainer>
                    <SignupContainer>
                        <SignupLabel>Don't have an account? <Link href="#">Sign up</Link></SignupLabel>
                    </SignupContainer>
                </LoginContainer>
            </Container>);
  }