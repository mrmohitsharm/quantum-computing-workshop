import React from "react";
import "./Importance.css";
import bgImage from "../../images/image.png"; // background image

export default function Importance() {
  return (
    <section
      className="importance-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="importance-content">
        <h2 className="section-title">IMPORTANCE</h2>

        <ul className="importance-list">
          <li>Master next-generation computing paradigms and emerging technologies.</li>
          <li>Strengthen your foundation for careers in AI, Quantum Computing, Robotics, Blockchain, and more.</li>
          <li>Gain hands-on understanding of Qubits, superposition, and quantum algorithms.</li>
          <li>Enhance real-world problem-solving through practical simulations and projects.</li>
          <li>Stay ahead of the industry curve with futuristic, innovation-driven knowledge.</li>
        </ul>
      </div>
    </section>
  );
}
