import React from "react";
import "./DateTime.css";
import bgImage from "../../images/image.png"; // If inside src/images
// OR
// const bgImage = "/images/image.png"; // If inside public/images

export default function DateTime() {
  return (
    <section
      className="date-time-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="date-card">
        <div className="date-left">
          <h3 className="date-number">12</h3>
          <p className="date-month">October 2025</p>
        </div>

        <div className="time-right">
          <h4 className="time-label">Event Timing</h4>
          <p className="time-text">12:00 PM – 02:00 PM</p>
        </div>
      </div>
    </section>
  );
}
