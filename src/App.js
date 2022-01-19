import React from "react";
import { useEffect } from "react";
import "./App.css";
import Checkout from "./components/CheckoutForm/Checkout";
import CheckoutPage from "./components/CheckoutPage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider.js";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-page" element={<CheckoutPage />} />
          <Route path="/signup-page" element={<SignUp />} />
          <Route path="/signin-page" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
