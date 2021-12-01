import React from "react";
import { Link } from "react-router-dom";
import "./Step2.css";
import img from "../Images/savetimeillustration.svg";
const Step2 = () => {
  return (
    <div className="center-step2">
      <div className="booking-title">
        <h2>SAVE TIME</h2>
      </div>
      <div className="booking-img">
        <img src={img} alt="" />
      </div>
      <div className="booking-description">
        <p>
          No paper appointment forms to fill so you can spend more time in
          treatment
        </p>
      </div>
      <div className="login-btn">
        <Link to="/physio">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step2;
