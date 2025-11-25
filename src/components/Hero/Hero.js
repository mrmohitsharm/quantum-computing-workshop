import React from "react";
import "./Hero.css";
import quantumImg from "../../assets/quantum.png";
import bgImage from "../../images/bacg.png";
import { Link } from "react-router-dom"; 


export default function Hero() {
  return (
    <section
      className="hero-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-left">
        <h1 className="title">QUANTUM COMPUTING WORKSHOP</h1>

        <p className="subtitle">
          From bits to Qbits — enhance digital technology capabilities with
          skills that open up new opportunities.
        </p>

        
  <Link to="/Payment">
  <button className="Paynment">Get Started →</button>
</Link>

        <div className="glow-circle"></div>
      </div>

      <div className="hero-right">
        <img src={quantumImg} alt="Quantum 3D" className="hero-image" />
      </div>

      <div className="floating-particle p1"></div>
      <div className="floating-particle p2"></div>
      <div className="floating-particle p3"></div>
    </section>
  );
}
