import React from "react";
import { NavLink } from "react-router-dom";
import cancelBooking from "../../Images/cancel booking illustration.svg";
import "./Cancelbooking.css";
const Cancelbooking = () => {
  return (
    <div className="cancel-booking">
      <div className="cancel-booking-title">Cancel booking</div>
      <div className="cancel-booking-img">
        <img src={cancelBooking} alt="" />
      </div>
      <div className="cancel-booking-details">
        Easily cancel your appointment if life gets in the way
      </div>
      <div className="login-btn">
        <NavLink to="/clientdashboard">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cancelbooking;
