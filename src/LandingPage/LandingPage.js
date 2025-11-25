import React from "react";
import "./LandingPage.css";

import Hero from "../components/Hero/Hero";
import Material from "../components/Material/Material";
import Importance from "../components/Importance/Importance";
import DateTime from "../components/DateTime/DateTime";
import Payment from "../components/Payment/Payment";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <Hero />
      <Material />
      <Importance />
      <DateTime />
      <Payment />
    </div>
  );
}
