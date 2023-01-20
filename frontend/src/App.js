
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

function App() {
  return (
    <div className="App">
      {/* <ChakraProvider>
        <Cart />
        <Wishlist/>
      </ChakraProvider> */}

   <Routes>
        <Route exact path="/login" element={ <Login_user_admin/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/admin" element={<Admin/>}/>
        <Route exact path="/singleproduct" element={Singleproduct_page}></Route>
        <Route exact path="/update" element={<Updateproduct/>}></Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
