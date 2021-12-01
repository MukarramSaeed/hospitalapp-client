import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Logo from "./kinima_logo.svg";
import Profile from "./Vector.svg";
import "./Newaccount.css";
import useAuth from "../Firebase/Hooks/useAuth";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";

const Newaccount = () => {
  const { registerUser, user, isLoading, authError } = useAuth();

  const [registerData, setRegisterData] = useState({});
  const history = useHistory();
  //getting value from newregister
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const { profile } = registerData;
  console.log(registerData);
  //handle click in from
  const handleClick = (e) => {
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(registerData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    // if (registerData.password1 !== registerData.password2) {
    //   alert("password didn't match");
    //   return;
    // }
    ///////
    // registerUser(
    //   registerData.email,
    //   registerData.password,

    //   registerData.firstName,
    //   registerData.lastName,
    //   history
    // );
    // e.preventDefault();
  };

  return (
    <div className="newaccount">
      <div className="newaccount-logo">
        <img src={Logo} alt="" className="logo-img" />
      </div>

      {/* Register from */}

      <div className="newaccount-from">
        {!isLoading && (
          <form onSubmit={handleClick}>
            <div className="profile-upload">
              <div className="profile-picture">
                <img src={Profile} alt="" className="profile-img" />
              </div>
              <div className="upload-picture">
                <input
                  type="file"
                  name="profile"
                  placeholder="upload"
                  className="upload-file"
                  id=""
                  onBlur={handleOnChange}
                  accept="image/*"
                />
                <label for="file">UPLOAD</label>
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
                onBlur={handleOnChange}
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
                onBlur={handleOnChange}
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
                onBlur={handleOnChange}
                required
              />
            </div>
            <div className="password">
              <p className="title-register">Password</p>
              <input
                type="password"
                className="input-field"
                name="password"
                placeholder="****"
                id=""
                onBlur={handleOnChange}
                required
              />
            </div>
            {/* <div className="password">
              <p className="title-register">Confirm Password</p>
              <input
                type="password"
                className="input-field"
                name="password2"
                placeholder="****"
                onBlur={handleOnChange}
                id=""
                required
              />
            </div> */}
            <div className="doctor-code">
              <p className="title-register">
                Physio Code (n/a if you are a client)
              </p>
              <input
                type="password"
                className="input-field"
                name="physioCode"
                placeholder="****"
                onBlur={handleOnChange}
                id=""
              />
            </div>
            <div className="login-btn">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
            <div className="login-btn">
              <NavLink to="/sucessregister">
                <button type="submit" className="submit-btn">
                  Login
                </button>
              </NavLink>
            </div>
            {/* {user?.email && (
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
              </Alert>
            )}
            :{authError && <Alert severity="error">{authError}</Alert>} */}
          </form>
        )}
        {isLoading && <CircularProgress />}
      </div>
    </div>
  );
};

export default Newaccount;
