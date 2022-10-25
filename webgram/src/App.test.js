import { render, screen } from '@testing-library/react';
import App from './App';
import Register from "./components/Register/Register";

describe('LoginTest', () => {
    test('renders login form title', () => {
        render (<App />);
        const loginHeader = screen.getByDisplayValue("Log In");
        expect(loginHeader).toBeInTheDocument();
    });

    test('renders login form email input', () => {
        render(<App />);
        const loginEmailInput = screen.getByText("Email");
        expect(loginEmailInput).toBeInTheDocument();
    });

    test('renders login form password input', () => {
        render(<App />);
        const loginPasswordInput = screen.getByText("Password");
        expect(loginPasswordInput).toBeInTheDocument();
    });

    test('renders login form submit button', () => {
        render(<App />);
        const loginSubmitButton = screen.getByRole("button");
        expect(loginSubmitButton).toBeInTheDocument();
    });

    test('renders login form signup link', () => {
        render(<App />);
        const loginSignupLink = screen.getByText("Sign up");
        expect(loginSignupLink).toBeInTheDocument();
    });

    test('login works and redirects', () => {
        render(<App />);
        const loginEmail = "omario@sas.upenn.edu";
        const loginPassword = "test";
        const loginEmailInput = screen.getByText("Email");
        const loginPasswordInput = screen.getByText("Password");
        const loginSubmitButton = screen.getByRole("button");
        loginEmailInput.value = loginEmail;
        loginPasswordInput.value = loginPassword;
        loginSubmitButton.click();
        expect(window.location.href).toBe("http://localhost/");
    });
})

describe ('RegisterTest', () => {
    test('renders register form title', () => {
        render(<Register />);
        const registerHeader = screen.getByText("Create a New Account");
        expect(registerHeader).toBeInTheDocument();
    });

    test('renders register form email input', () => {
        render(<Register />);
        const registerEmailInput = screen.getByText("Email");
        expect(registerEmailInput).toBeInTheDocument();
    });

    test('renders register form password input', () => {
        render(<Register />);
        const registerPasswordInput = screen.getByText("Password");
        expect(registerPasswordInput).toBeInTheDocument();
    });

    test('renders register form username input', () => {
        render(<Register />);
        const registerUsernameInput = screen.getByText("Username");
        expect(registerUsernameInput).toBeInTheDocument();
    });

    test('renders register form submit button', () => {
        render(<Register />);
        const registerSubmitButton = screen.getByRole("button");
        expect(registerSubmitButton).toBeInTheDocument();
    });
});

describe('profilePageTest', () => {
    test('renders profile page header', () => {
        render(<App />);
        const loginEmail = "omario@sas.upenn.edu";
        const loginPassword = "test";
        const loginEmailInput = screen.getByRole("textbox");
        const loginPasswordInput = screen.getByTestId("password-input-box");
        const loginSubmitButton = screen.getByTestId("login-submit-button");

        loginEmailInput.value = loginEmail;
        loginPasswordInput.value = loginPassword;

        console.log(document.body.innerHTML);

        expect(loginEmailInput.type).toBe("text");
        expect(loginPasswordInput.type).toBe("password");

        expect(loginEmailInput.value).toBe(loginEmail);
        expect(loginPasswordInput.value).toBe(loginPassword);

        loginSubmitButton.click();
    });
});
