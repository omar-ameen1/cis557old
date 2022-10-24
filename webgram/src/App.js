import './App.css';
import Header from "./components/header-components/header";
import MainBody from "./components/main-view-components/main-body";
import { faMagnifyingGlass, faVideoCamera, faImage } from '@fortawesome/free-solid-svg-icons'
import './css/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import styled from 'styled-components';


const Page = styled.div`
  height: 100%;
`
function App() {
    // TODO: Use state to store user's JWT token
    // TODO: Check if user is logged in
    // TODO: Check if the user profile we're on is the same as the user logged in

  return (
      <>
        <Header searchIcon={faMagnifyingGlass}/>
        <MainBody userName={"Placeholder"} videoIcon={faVideoCamera} imageIcon={faImage} postBio={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit in."}/>
      </>

  );
}

export default App;
