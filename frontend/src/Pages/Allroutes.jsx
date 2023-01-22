import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Components/Payments/Cart";
import Payment from "../Components/Payments/Payment";
import Wishlist from "../Components/Payments/Wishlist";
import Admin from "../Deepkamal/Admin";
import Login_user_admin from "../Deepkamal/login_user_admin";
import Signup from "../Deepkamal/signup";
import Singleproduct_page from "../Deepkamal/Singleproduct_page";

import Updateproduct from "../Deepkamal/updatenewproduct";
import HomePage from "./Home";
import { NewArrival } from "./NewArrival";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login_user_admin />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/ring" element={<NewArrival />}></Route>
        <Route
          path="/singleproduct/:_id"
          element={<Singleproduct_page />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/update" element={<Updateproduct />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
