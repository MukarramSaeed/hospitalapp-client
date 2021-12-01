import React from "react";
import "./CancelStep1.css";
import calender from "../../Images/calendar_today.svg";
import { NavLink } from "react-router-dom";
const CancelStep1 = () => {
  return (
    <div className="cancelStep1">
      <div className="appoinment">
        <div className="appoinment-img">
          <img src={calender} alt="" height="47px" width="41px" />
        </div>
        <div className="appoinment-details">
          <div className="appoinment-details-title">Friday 22nd October</div>
          <div className="appoinment-details-time">3:00 PM</div>
          <div className="appoinment-details-doctor">Henry Blackburn</div>
        </div>
      </div>
      <div className="login-btn">
        <NavLink to="/cancelsucessful">
          <button type="submit" className="submit-btn">
            Yes
          </button>
        </NavLink>
      </div>
      <div className="login-btn">
        <NavLink to="/clientdashboard">
          <button type="submit" className="submit-btn">
            No
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CancelStep1;
