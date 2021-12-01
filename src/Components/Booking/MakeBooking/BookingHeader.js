import React from "react";
import { Link } from "react-router-dom";
import "./BookingHeader.css";
const BookingHeader = () => {
  return (
    <div>
      <div className="makebooking">
        <nav className="booking-nav">
          <div className="booking-nav-items">
            <Link to="/physio">
              <div className="booking-nav-btn">
                <button className="nav-btn-booking">Physio</button>
              </div>
            </Link>
            <Link to="/date">
              <div className="booking-nav-btn">
                <button className="nav-btn-booking">Date</button>
              </div>
            </Link>
            <Link to="/time">
              <div className="booking-nav-btn">
                <button className="nav-btn-booking">Time</button>
              </div>
            </Link>
            <Link to="/symptoms">
              <div className="booking-nav-btn">
                <button className="nav-btn-booking">Symptoms</button>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BookingHeader;
