
import "./App.css";
import Cart from "./Components/Payments/Cart";
import {ChakraProvider} from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login_user_admin from "./Deepkamal/login_user_admin"
import Signup from './Deepkamal/signup';
import Wishlist from "./Components/Payments/Wishlist";
import Admin from "./Deepkamal/Admin";
import Singleproduct_page from "./Deepkamal/Singleproduct_page";
import Updateproduct from "./Deepkamal/addnewproduct";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Footer/>
 </div>
  );
}

export default App;
