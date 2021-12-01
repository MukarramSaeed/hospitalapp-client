import React from "react";
import "./SucessRegister.css";
import Logo from "./kinima_logo.svg";
import tick from "../Images/tick.svg";
import { Link } from "react-router-dom";
const SucessRegister = () => {
  return (
    <>
      <div className="sucessregister">
        <img src={Logo} alt="" className="logo-img" />
      </div>
      <div className="center-register-success">
        <div className="icon-tick">
          <img src={tick} alt="" />
        </div>
        <div className="activate-account">
          <p>ACCOUNT CREATED</p>
          <p className="subtitle">Please sign in</p>
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

export default SucessRegister;
