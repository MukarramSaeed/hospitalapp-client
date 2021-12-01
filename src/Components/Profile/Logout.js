import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../Firebase/Hooks/useAuth";
import tick from "../Images/tick.svg";
import "./logout.css";
const Logout = () => {
  const { logout } = useAuth();
  return (
    <div className="logout">
      <div className="logout-center">
        <div className="logout-title">ARE YOU SURE YOU WANT TO LOGOUT?</div>
        <div className="login-btn">
          <NavLink to="/logoutsuccessful">
            <button type="submit" onClick={logout} className="submit-btn">
              Yes
            </button>
          </NavLink>
        </div>
        <div className="login-btn">
          <NavLink to="/step1">
            <button type="submit" className="submit-btn">
              No
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Logout;
