import React from "react";
import Logo from "./kinima_logo.svg";
import "./Forgetpassword.css";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  return (
    <div className="reset-password">
      {/* logo    */}
      <div className="logo-resetpassword">
        <img src={Logo} className="logo-img" alt="" />
      </div>

      {/* center the div element  */}
      <div className="center-fongetpassword">
        <div className="reset-title">Reset password</div>
        <div className="reset-driscription">
          Please submit your email address and we will send you an email with a
          link to reset your password
        </div>
        <div className="email-forgetpassword">
          <p className="title-register">Email</p>
          <input
            type="text"
            name=""
            className="input-field"
            placeholder="john.doe@gmail.com"
            id=""
          />
        </div>
        <div className="login-btn">
          <Link to="/sucessreset">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
