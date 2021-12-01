import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../Images/tick.svg";
import "./cancelsuccessful.css";
const SuccessfulCancelation = () => {
  return (
    <div className="cancelSuccessful">
      <div className="img-confirmation">
        <img src={img} alt="" />
      </div>
      <div className="container-text">Cancel sucessful</div>
      <div className="login-btn">
        <NavLink to="/clientdashboard">
          <button type="submit" className="submit-btn">
            Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SuccessfulCancelation;
