import React from "react";
import { Link } from "react-router-dom";
import useAppoinment from "../Firebase/Hooks/useAppoinment";
import "./Step5.css";
const Step5 = () => {
  // const { physioValue, dateValue, timeValue } = useAppoinment();
  return (
    <div className="container-step5">
      <div className="container-text">ARE THESE DETAILS CORRECT?</div>
      <p className="booking-name">Friday 22nd October</p>
      <p className="booking-name">3:00 PM</p>
      <p className="booking-name">Henry Blackburn</p>
      <div className="login-btn">
        <Link to="/confirmation">
          <button type="submit" className="submit-btn">
            Yes
          </button>
        </Link>
      </div>
      <div className="login-btn">
        <Link to="/symptoms">
          <button type="submit" className="submit-btn">
            No
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step5;
