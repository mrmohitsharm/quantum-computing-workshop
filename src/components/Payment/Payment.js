import React from "react";
import "./Payment.css"; // existing CSS

export default function RazorpayPayment() {

  const handleRazorpayPayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay Test/Live key
      amount: 50000, // ₹500 in paise
      currency: "INR",
      name: "Quantum Workshop",
      description: "Workshop Payment",
      image: "https://yourwebsite.com/logo.png", // optional
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        // Call backend to verify payment if needed
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: { color: "#7b2ff7" },
      modal: { escape: true }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="payment-section">
      <div className="payment-container">

        {/* LEFT CONTENT */}
        <div className="payment-content">
          <h2 className="section-title">PAYMENT GATEWAY</h2>
          <p className="payment-text">
            Secure your spot by completing the payment.  
            You can pay instantly by scanning the QR code below or using Card.
          </p>

          <ul className="payment-benefits">
            <li>✔ Secure and encrypted transactions</li>
            <li>✔ Instant workshop registration</li>
            <li>✔ Supports all UPI/Wallet apps</li>
            <li>✔ Safe, fast & reliable</li>
          </ul>

          {/* Razorpay Pay Button */}
          <button onClick={handleRazorpayPayment} className="cta-btn">
            Click Here For Paynment
          </button>
        </div>

        {/* RIGHT QR CODE */}
        

      </div>
    </section>
  );
}
