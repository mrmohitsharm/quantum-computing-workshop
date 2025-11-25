import React, { useState } from "react";
import "./Material.css";
import bgImage from "../../assets/image.png"; // ⭐ Import background image here

export default function Material() {
  const [openIndex, setOpenIndex] = useState(null);

  const topics = [
    {
      title: "From Bits to Qbits",
      points: [
        "Difference between classical bits and quantum bits",
        "Superposition concept",
        "Quantum state representation",
        "Real-world examples of Qbits"
      ]
    },
    {
      title: "Introduction to Quantum Computing",
      points: [
        "What is quantum computing?",
        "Why quantum is faster?",
        "Quantum gates basics",
        "Applications in AI, Cryptography, Optimization"
      ]
    },
    {
      title: "Core Components of Quantum Computing",
      points: [
        "Quantum Gates & Circuits",
        "Entanglement",
        "Quantum Algorithms",
        "Quantum Hardware overview"
      ]
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="material-section"
      style={{
        backgroundImage: `url(${bgImage})` // ⭐ Background added here
      }}
    >
      <h2 className="section-title">MATERIAL THAT WILL BE DISCUSSED</h2>

      <div className="material-list">
        {topics.map((topic, index) => (
          <div key={index} className="material-item">
            <div className="material-box" onClick={() => toggle(index)}>
              {topic.title}
            </div>

            {/* Expandable Points */}
            <div className={`points-container ${openIndex === index ? "open" : ""}`}>
              <ul>
                {topic.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
