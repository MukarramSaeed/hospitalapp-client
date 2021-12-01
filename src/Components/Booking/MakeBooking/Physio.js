import React, { useState } from "react";
import { Link } from "react-router-dom";
import Appoinment from "./Appoinment";
import "./Physio.css";
const Physio = () => {
  const [value, setValue] = useState();
  const physio = {
    value,
  };
  const handleCheck = (e) => {
    setValue(e.target.value);

    //sending data to server
    fetch("http://localhost:3000/physio", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(physio),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  console.log(physio);
  return (
    <div className="container-physio">
      <div className="container-physio-text">
        CHOOSE A <br /> PRACTITIONER
      </div>
      <div className="container-checkbox">
        <input
          type="radio"
          name="physio"
          value="Henry Blackburn"
          onChange={handleCheck}
          id=""
        />
        <div className="physio-name">
          Henry Blackburn
          <p className="physio-title">Physio</p>
        </div>
      </div>
      <div className="container-checkbox">
        <input
          type="radio"
          name="physio"
          onChange={handleCheck}
          value="Laila Van Der Merwe"
          id=""
        />
        <div className="physio-name">
          Laila Van Der Merwe
          <p className="physio-title">Lead Physio</p>
        </div>
      </div>
      <div className="container-checkbox">
        <input
          type="radio"
          name="physio"
          onChange={handleCheck}
          value="Maire Tan"
          id=""
        />
        <div className="physio-name">
          Maire Tan
          <p className="physio-title">Remedial Massage Therapist</p>
        </div>
      </div>
      {/* <Appoinment physioValue={physio.value}></Appoinment> */}
      <div>{value}</div>
      <div className="login-btn">
        <Link to="/date">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </Link>
      </div>
      <div className="login-btn">
        <Link to="/step2">
          <button type="submit" className="submit-btn">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Physio;
