import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

//show range slider value
const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 10,
    label: "10",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderMarks() {
  // get value
  const [value, getValue] = React.useState(1);
  const handeValue = (e) => {
    const ranger = e.target.value;
    getValue(ranger);
    console.log(ranger);
    //sending value to server
    const rangerValue = {
      value,
    };
    fetch("http://localhost:3000/symptoms", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rangerValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={1}
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="auto"
        onChange={handeValue}
        marks={marks}
        min={1}
        max={10}
      />
      Value: {value}
    </Box>
  );
}
