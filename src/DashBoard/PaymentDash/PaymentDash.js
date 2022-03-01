import React from "react";
import payment from "../images/payment.png";
import "./Payment.css";

const PaymentDash = () => {
  return (
    <div className="payment_components">
      <img
        src={payment}
        className="img-fluid"
        style={{ width: "450px" }}
        alt=""
      />
      <div className="payment_text">
        <h1 className="siliguri_fonts fw-bold">
          পেমেন্ট সিস্টেম খুবই শীঘ্রই আসছে
        </h1>
      </div>
    </div>
  );
};

export default PaymentDash;
