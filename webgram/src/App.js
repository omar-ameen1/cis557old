import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import styled from 'styled-components';


const Page = styled.div`
  height: 100%;
`
function App() {

  return (
      <Page>
              <Login/>
              
      </Page>
      /* <BrowserRouter>
          <Routes>
            <Route path="/login" compoment={login} />
          </Routes>
        </BrowserRouter> */

  );
}

export default App;
