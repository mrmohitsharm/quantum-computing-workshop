import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import RazorpayPayment from "./components/Payment/RazorpayPayment"; // Updated import
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home / Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Payment Page */}
        <Route path="/payment" element={<RazorpayPayment />} /> {/* Lowercase route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
