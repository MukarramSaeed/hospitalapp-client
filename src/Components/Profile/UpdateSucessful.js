import React from "react";
import { Link } from "react-router-dom";
import tick from "../Images/tick.svg";
import "./UpdateSucessful.css";
const UpdateSucessful = () => {
  return (
    <div className="updateSucessful">
      <div className="icon-tick">
        <img src={tick} alt="" />
      </div>
      <div className="activate-account">
        <p>PROFILE UPDATED</p>
      </div>
      <div className="login-btn">
        <Link to="/profile">
          <button type="submit" className="submit-btn">
            Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateSucessful;
