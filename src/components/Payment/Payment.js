import React from "react";
import "./Payment.css";

export default function Payment() {
  return (
    <section className="payment-section">
      <div className="payment-container">

        {/* LEFT CONTENT */}
        <div className="payment-content">
          <h2 className="section-title">PAYMENT GATEWAY</h2>
          <p className="payment-text">
            Secure your spot by completing the payment.  
            You can pay instantly by scanning the QR code below.
          </p>

          <ul className="payment-benefits">
            <li>✔ Secure and encrypted transactions</li>
            <li>✔ Instant workshop registration</li>
            <li>✔ Supports all UPI/Wallet apps</li>
            <li>✔ Safe, fast & reliable</li>
          </ul>
        </div>

        {/* RIGHT QR CODE */}
        <div className="payment-qr-box">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=YourPaymentLink"
            alt="QR Code"
            className="payment-qr"
          />
          <p className="qr-text">Scan QR to Join Workshop</p>
        </div>

      </div>
    </section>
  );
}
