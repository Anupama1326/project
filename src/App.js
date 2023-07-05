import logo from "./logo.svg";
import "./App.css";
// import Login from './Components/Login';
import MainPage from "./Components/MainPage";
import Nav from "./Components/Nav";
import Explore from "./Components/Explore";
import Orders from "./Components/Orders";
import Profile from "./Components/Profile";
import Login from "./Components/Login"
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<MainPage/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Orders" element={<Orders/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
