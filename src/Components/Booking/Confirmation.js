import React from "react";
import { Link } from "react-router-dom";
import "./Confirmation.css";
import img from "../Images/tick.svg";
const Confirmation = () => {
  return (
    <div className="container-confirmation">
      <div className="img-confirmation">
        <img src={img} alt="" />
      </div>
      <div className="container-text">BOOKING CONFIRMED</div>
      <h6 className="sub-text">Late cancellation and no show fees apply</h6>
      <p className="booking-name">Friday 22nd October</p>
      <p className="booking-name">3:00 PM</p>
      <p className="booking-name">Henry Blackburn</p>
      <div className="login-btn">
        <Link to="/step1">
          <button type="submit" className="submit-btn">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
