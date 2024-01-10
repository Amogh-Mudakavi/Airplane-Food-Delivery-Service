import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/homepage";
import Cart from "./pages/Cart";
import Login from "./components/login";
import Product from "./components/Product";
import SignupForm from "./components/signupform"; // Import the SignupForm component
import { Provider } from "react-redux";
import Home from "./pages/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        {/* Route to Login page */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/product" />
            ) : (
              <>
               
                <Login setIsLoggedIn={setIsLoggedIn} />
              </>
            )
          }
        />
        {/* Route to Product page */}
        <Route
          path="/product"
          element={
            isLoggedIn ? (
              <>
                <div className="bg-slate-900">
                  <Navbar />
                </div>
                <Home />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Route to Signup page */}
        <Route
          path="/signup"
          element={<SignupForm setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
  );
};

export default App;
