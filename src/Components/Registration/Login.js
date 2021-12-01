import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/kinima_logo.svg";
import "./login.css";
const Login = (props) => {
  const [loginData, setLoginData] = useState({});
  //getting value from email and password field
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  //showing value
  // console.log(loginData);
  // Cancel funtion default value
  const handleClick = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
  if(data.message==="Password/Email incorrect"){
    alert("Password/Email incorrect")
  }else if(data.message==="Account doesn't exist"){
    alert("Account doesn't exist")
  }else if(data.message==="Please provide email and password"){
    alert("Please provide email and password")
  }else{
    let {history}=props
    history.push('/step1')
  }
      });
  };
  return (
    <div className="login-page">
      <div className="login-box">
        {/* Logo image */}

        <div className="img">
          <img src={logo} alt="" width="232px" height="90px" className="logo" />
        </div>

        {/* Login Form  */}

        <form onSubmit={ handleClick}>
          <div className="username">
            <p className="title">Username</p>
            <input
              type="text"
              name="email"
              className="input-field"
              placeholder="john.doe@gmail.com"
              id=""
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="password">
            <p className="title">Password</p>
            <input
              type="password"
              className="input-field"
              name="password"
              placeholder="****"
              onChange={handleOnChange}
              id=""
            />
          </div>
          <div className="login-btn">
            {/* <NavLink to="/step1"> */}
              <button type="submit" className="submit-btn">
                Submit
              </button>
            {/* </NavLink> */}
          </div>
        </form>
        <div className="final-text">
          <Link to="/forgetpassword">
            <p className="forget">Forgot password?</p>
          </Link>
          <Link to="/register">
            <p className="new-account">New Account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
