import './App.css';
import Header from "./components/header-components/header";
import MainBody from "./components/main-view-components/main-body";
import { } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './css/main.css';

function App() {
  return (
      <>
        <Header searchIcon={faMagnifyingGlass}/>
        <MainBody />
      </>

  );
}

export default App;
