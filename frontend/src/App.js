
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login_user_admin from "./Deepkamal/login_user_admin"
import Signup from './Deepkamal/signup';

function App() {
  return (
    <div className="App">
  

   <Routes>
        <Route exact path="/login" element={ <Login_user_admin/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        {/* <Route exact path="/login" element={<Login_user_admin/>}/> */}
      </Routes>

    </div>
  );
}

export default App;
