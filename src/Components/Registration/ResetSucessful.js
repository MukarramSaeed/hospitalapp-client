import React from "react";
import "./reset.css";
import Logo from "./kinima_logo.svg";
import tick from "../Images/tick.svg";
import { Link } from "react-router-dom";
const ResetSucessful = () => {
  return (
    <>
      <div className="sucessregister">
        <img src={Logo} alt="" className="logo-img" />
      </div>
      <div className="center-reset-success">
        <div className="icon-tick">
          <img src={tick} alt="" />
        </div>
        <div className="activate-account">
          <p className="reset-title">RESET PASSWORD EMAIL SENT</p>
          <p className="subtitle">Please check your inbox</p>
        </div>
        <div className="login-btn">
          <Link to="/login">
            <button type="submit" className="submit-btn">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResetSucessful;
