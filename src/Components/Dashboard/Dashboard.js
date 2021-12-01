import React from "react";
import sunny from "../Images/wb_sunny.svg";
import calender from "../Images/calendar_today.svg";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="clinect-dashboar">
      <div className="sunny">
        <img src={sunny} alt="" height="36px" width="36px" />
      </div>
      <div className="good-morning">Good morning</div>
      <div className="Client-name">Anas islam</div>
      <div className="appoinment-title">APPOINTMENTS</div>
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
        <NavLink to="/step1">
          <button type="submit" className="submit-btn">
            Make a booking
          </button>
        </NavLink>
      </div>
      <div className="login-btn">
        <NavLink to="/cancel-step1">
          <button type="submit" className="submit-btn">
            Cancel booking
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
