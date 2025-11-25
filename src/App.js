import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Payment from "./components/Payment/Payment";  // <-- adjust path if needed
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home / Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Payment Page */}
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
