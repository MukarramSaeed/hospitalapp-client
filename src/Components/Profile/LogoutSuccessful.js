import React from "react";
import { Link } from "react-router-dom";
import tick from "../Images/tick.svg";
import "./logoutsuccessful.css";
const LogoutSuccessful = () => {
  return (
    <div className="logoutSucessful">
      <div className="icon-tick">
        <img src={tick} alt="" />
      </div>
      <div className="activate-account">
        <p>LOG OUT SUCCESSFUL</p>
      </div>
      <div className="login-btn">
        <Link to="/login">
          <button type="submit" className="submit-btn">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LogoutSuccessful;
