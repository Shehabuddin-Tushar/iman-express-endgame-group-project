import React, { useState } from "react";
import admin from "../images/admin.png";
import "./Admin.css";
const Admin = () => {
  const [email, setEmail] = useState("");
  const handleAdminInput = (e) => {
    setEmail(e.target.value);
  };
  const handleMakeAdmin = (e) => {
    e.preventDefault();
    const user = { email };
    console.log(user);
  };
  return (
    <div className="container">
      <div className="make_admin_wrapper">
        <div className="welcome_to_make_admin">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img src={admin} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <div className="admin_add siliguri_fonts">
                <h2>
                  এডমিন এ্যাড করার পেইজে আপনাকে <span>স্বাগতম।</span>
                </h2>
                <p>
                  এ্যাডমিন হিসেবে কাউকে এ্যাড করতে চাইলে নিম্নে তার ইমেইলটা
                  বসান।{" "}
                </p>
                <div className="make_admin">
                  <form onSubmit={handleMakeAdmin}>
                    <input onBlur={handleAdminInput} type="text" name="email" />
                    <br />
                    <div className="AllClassButton">
                      <button className="siliguri_fonts" type="submit">
                        এ্যাডমিন এ্যাড করুন
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
