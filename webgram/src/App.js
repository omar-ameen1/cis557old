import './App.css';
import Header from "./components/header-components/header";
import MainBody from "./components/main-view-components/main-body";
import { faMagnifyingGlass, faVideoCamera, faImage } from '@fortawesome/free-solid-svg-icons'
import './css/main.css';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import styled from 'styled-components';
import {useRef, useState} from "react";

import {validateLoginRequest} from "./scripts/login-request-handler";


const Page = styled.div`
  height: 100%;
`
function App() {
    // TODO: Use cookies to store user's JWT token
    // TODO: Check if user is logged in
    // TODO: Check if the user profile we're on is the same as the user logged in

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
                <Header searchIcon={faMagnifyingGlass} userID={id}/>
                <MainBody userID={id} videoIcon={faVideoCamera} imageIcon={faImage}
                          postBio={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit in."}/>
            </>
        );
    }

    if (!loggedIn.current) {
        console.log("Not logged in");
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login loginHandler={(email, password) => {validateLoginRequest(email, password).then(r => {
                        if (r !== null) {
                            console.log("login successful");
                            console.log("r" + r);
                            login(r);
                        } else {
                            console.log("login failed");
                        }
                    })}}/>}/>
                    <Route exact path="/register" element={<Register/>}/>
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
