import './App.css';
import Header from "./components/header-components/header";
import MainBody from "./components/main-view-components/main-body";
import UserPage from "./components/main-view-components/user-page";
import { faMagnifyingGlass, faVideoCamera, faImage } from '@fortawesome/free-solid-svg-icons'
import './css/main.css';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {useRef, useState} from "react";

import {validateLoginRequest} from "./scripts/login-request-handler";
import {registerUser} from "./scripts/registration-request-handler";

function App() {
    const [loginState, setLogin] = useState(false);
    const [userID, setUserID] = useState(null);
    const loggedIn = useRef(false);

    const login = (id) => {
        setUserID(id);
        loggedIn.current = true;
        setLogin(true);
    }

    const logout = () => {
        setUserID(null);
        loggedIn.current = false;
        setLogin(false);
    }

    const profilePage = (id) => {
        return (
            <>
                <Header searchIcon={faMagnifyingGlass} userID={id} />
                <MainBody userID={id} videoIcon={faVideoCamera} imageIcon={faImage} />
            </>
        );
    }

    if (!loggedIn.current) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login loginHandler={(email, password) => {validateLoginRequest(email, password).then(r => {
                        if (r !== null) {
                            login(r);
                        }
                    })}}/>}/>
                    <Route exact path="/register" element={<Register registrationHandler={(email, username, password) => {
                        registerUser(email, username, password).then(r => {
                            if (r) {
                                window.location.href = "/";
                            }
                        })
                    }}/>}/>
                    <Route path={"/users/:username"} element={<UserPage videoIcon={faVideoCamera} imageIcon={faImage} userID={null} />} />
                </Routes>
            </BrowserRouter>
        );
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={profilePage(userID)}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;
