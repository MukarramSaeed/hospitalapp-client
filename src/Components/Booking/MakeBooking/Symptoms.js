import React, { useState } from "react";
import DiscreteSliderMarks from "./Text";
import "./Symptoms.css";
import { Link } from "react-router-dom";
const Symptoms = () => {
  const [checkValue, getcheckValue] = useState([]);

  const handleCheckList = (e) => {
    getcheckValue(e.target.value);

    //sending value to server
    const CheckValue = {
      checkValue,
    };
    fetch("http://localhost:3000/symptoms", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(CheckValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  console.log(checkValue);
  return (
    <div className="container-symptoms">
      <div className="container-title">
        <div className="container-text">SYMPTOMS</div>
        <div className="container-description">
          Please rate your complaints in order of severity between 1 and 10. 1 =
          Least, 10 = Worst
        </div>
      </div>
      <div className="symptoms">
        <div className="symptom-title">Pain</div>
        <DiscreteSliderMarks></DiscreteSliderMarks>
      </div>
      <div className="symptoms">
        <div className="symptom-title">Stiffness</div>
        <DiscreteSliderMarks></DiscreteSliderMarks>
      </div>
      <div className="symptoms">
        <div className="symptom-title">Swelling</div>
        <DiscreteSliderMarks></DiscreteSliderMarks>
      </div>
      <div className="symptoms">
        <div className="symptom-title">Loss of Function</div>
        <DiscreteSliderMarks></DiscreteSliderMarks>
      </div>

      <div className="symptoms">
        <div className="symptom-title">Loss of Motion</div>
        <DiscreteSliderMarks></DiscreteSliderMarks>
      </div>

      <div className="checklist-symptoms">
        <div className="title-checkliist">Reason for Visit</div>
        <div className="check-item">
          <div className="container-checkbox-list">
            <input
              type="checkbox"
              name="symptoms"
              onChange={handleCheckList}
              value="New Injury"
              id=""
            />
            <span className="reason-list">New Injury</span>
          </div>
          <div className="container-checkbox-list">
            <input
              type="checkbox"
              name="symptoms"
              onChange={handleCheckList}
              value="Alleviate Pain"
              id=""
            />
            <span className="reason-list">Alleviate Pain</span>
          </div>
          <div className="container-checkbox-list">
            <input
              type="checkbox"
              name="symptoms"
              onChange={handleCheckList}
              value="Hydro Therapy"
              id=""
            />
            <span className="reason-list">Hydro Therapy</span>
          </div>
          <div className="container-checkbox-list">
            <input
              type="checkbox"
              name="symptoms"
              onChange={handleCheckList}
              value="Injury Prevention"
              id=""
            />
            <span className="reason-list">Injury Prevention</span>
          </div>
          <div className="container-checkbox-list">
            <input
              type="checkbox"
              name="symptoms"
              onChange={handleCheckList}
              value="Massage Therapy"
              id=""
            />
            <span className="reason-list">Massage Therapy</span>
          </div>
          <div className="container-checkbox-list">
            <input
              type="checkbox"
              name="symptoms"
              onChange={handleCheckList}
              value="Vertigo Treatment"
              id=""
            />
            <span className="reason-list">Vertigo Treatment</span>
          </div>
          <div className="container-checkbox-list">
            <input
              type="checkbox"
              name="symptoms"
              onChange={handleCheckList}
              value="Stretching and Flexibility"
              id=""
            />
            <span className="reason-list">Stretching and Flexibility</span>
          </div>
          <div className="container-checkbox-list">
            <input
              type="checkbox"
              name="symptoms"
              onChange={handleCheckList}
              value="Post Operation Therpay"
              id=""
            />
            <span className="reason-list">Post Operation Therpay</span>
          </div>
          <div className="container-checkbox-list">
            <input
              type="checkbox"
              name="symptoms"
              onChange={handleCheckList}
              value="Management of Condition"
              id=""
            />
            <span className="reason-list">Management of Condition</span>
          </div>
          <div className="container-checkbox-list">
            <input
              type="checkbox"
              name="symptoms"
              onChange={handleCheckList}
              value="Post-Partrum Exercise Conditoning"
              id=""
            />
            <span className="reason-list">
              Post-Partrum Exercise Conditoning
            </span>
          </div>
          <div className="container-checkbox-list">
            <input
              type="checkbox"
              name="symptoms"
              onChange={handleCheckList}
              value="Other"
              id=""
            />
            <span className="reason-list">Other</span>
          </div>
        </div>
      </div>

      <div className="login-btn">
        <Link to="/step5">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </Link>
      </div>
      <div className="login-btn">
        <Link to="/time">
          <button type="submit" className="submit-btn">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Symptoms;
