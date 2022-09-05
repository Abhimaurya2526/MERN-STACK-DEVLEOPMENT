//import logo from './logo.svg';
import './App.css';



import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import Header from "./components/Header"
import EventHandeling from './components/EventHandeling';
import ToDo from './components/ToDO';
import Register from './components/register';
import UserManager from './components/UserManager';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div>
      <Toaster position='top-right'/>  

      <BrowserRouter>
      <Header/>
      {/* <Link to="/homepage">Homepage</Link>
      <Link to="/loginpage">Login</Link> */}
      
      <Routes>
      <Route element={<Home></Home>} path="/" />
      
      <Route element={<Home></Home>} path="homepage" />
      <Route element={<Login></Login>} path="login" />
      <Route element={<Register></Register>} path="register" />
      <Route element={<UserManager></UserManager>} path="manager" />
      
      <Route element={<EventHandeling></EventHandeling>} path="Event" />
      <Route element={<ToDo />} path="todo" />
      
      <Route element={<Notfound/>} path="*" />
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
