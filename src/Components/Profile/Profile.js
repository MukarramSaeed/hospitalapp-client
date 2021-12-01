import React from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";
import profile from "../Registration/Vector.svg";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-upload">
        <div className="profile-picture">
          <img src={profile} alt="" className="profile-img" />
        </div>
        <div className="upload-picture">
          <input
            type="file"
            name="profile"
            placeholder="upload"
            className="upload-file"
            id=""
            accept="image/*"
          />
        </div>
      </div>
      <div className="firstname">
        <p className="title-register">First Name</p>
        <input
          type="text"
          name="firstName"
          className="input-field"
          placeholder="Jhon"
          required
          id=""
        />
      </div>
      <div className="lastname">
        <p className="title-register">Last Name</p>
        <input
          type="text"
          name="lastName"
          className="input-field"
          placeholder="Doe"
          required
          id=""
        />
      </div>
      <div className="email">
        <p className="title-register">Email</p>
        <input
          type="email"
          name="email"
          className="input-field"
          placeholder="john.doe@gmail.com"
          id=""
          required
        />
      </div>
      <div className="password">
        <p className="title-register">Password</p>
        <input
          type="password"
          className="input-field"
          name="password1"
          placeholder="****"
          id=""
          required
        />
      </div>

      <div className="doctor-code">
        <p className="title-register">Physio Code (n/a if you are a client)</p>
        <input
          type="password"
          className="input-field"
          name="physioCode"
          placeholder="****"
          id=""
        />
      </div>

      <div className="login-btn">
        <NavLink to="/update">
          <button type="submit" className="submit-btn">
            Update
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;
