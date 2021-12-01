import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import "./Date.css";
import Step5 from "../Step5";
import Appoinment from "./Appoinment";
const DatePicker = () => {
  //Storing date value

  const [date, setDate] = React.useState(new Date());
  //handle onchange
  const handleDateChange = (e) => {
    setDate(e);

    //send to server
    const Date = {
      dateBooking: date.toLocaleDateString(),
    };
    fetch("http://localhost:3000/date", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Date),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container-date">
      {/* call the component  */}
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={date}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
        {console.log(date.toDateString())}
        {/* showing value dynamically  */}
        <h3>{date.toDateString()}</h3>
      </div>

      {/* button  */}
      <div className="login-btn">
        <Link to="/time">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </Link>
      </div>
      <div className="login-btn">
        <Link to="/physio">
          <button type="submit" className="submit-btn">
            Back
          </button>
        </Link>
      </div>
      {/* <Appoinment dateValue={date} /> */}
    </div>
  );
};

export default DatePicker;
