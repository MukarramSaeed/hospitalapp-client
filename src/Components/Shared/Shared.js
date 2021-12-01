import React from "react";
import Logo from "../Images/kinima_logo.svg";
import TemporaryDrawer from "./Drawer";
import setting from "./el_cog.svg";
import "./Shared.css";
const Shared = () => {
  return (
    <div className="shared-logo">
      <img src={Logo} className="logo-img" alt="" />
      <TemporaryDrawer></TemporaryDrawer>
    </div>
  );
};

export default Shared;
