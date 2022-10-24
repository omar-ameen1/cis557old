import Entry from "../EntryBox/Entry";
import Logo from "../WebgramLogo/Logo";
import { Container, LoginContainer, LoginHeader, EntryContainers, SubmitContainer, SignupContainer, SignupLabel, Link, LogoContainer, TopDock } from "./styles";
import Button from "../Button/Button";

export default function Register() {

    const EMAIL_LABEL = "Email";
    const USERNAME_LABEL = "Username";
    const PASSWORD_LABEL = "Password";
    const NEW_ACCOUNT = "Sign Up";

    return (<Container>
                <TopDock>
                    <LogoContainer>
                        <Logo/>
                    </LogoContainer>
                </TopDock>
                <LoginContainer>
                    <LoginHeader>Create a New Account</LoginHeader>
                    <EntryContainers>
                        <Entry labelName={EMAIL_LABEL}/>
                        <Entry labelName={USERNAME_LABEL}/>
                        <Entry labelName={PASSWORD_LABEL} isPassword={true}/>
                    </EntryContainers>
                    <SubmitContainer>
                        <Button text={NEW_ACCOUNT}/>
                    </SubmitContainer>
                    <SignupContainer>
                        <SignupLabel>Already have an account? <Link href="/">Log In</Link></SignupLabel>
                    </SignupContainer>
                </LoginContainer>
            </Container>);
  }