import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import setting from "./el_cog.svg";
import { Link } from "react-router-dom";
import useAuth from "../Firebase/Hooks/useAuth";
import "./Shared.css";
export default function TemporaryDrawer() {
  const { user, logout } = useAuth();
  const [state, setState] = React.useState({
    right: false,
  });

  //Drawer right
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* Drawer right  */}
      <div className="drawer-right">
        <div className="booking drawer">
          <i class="fas fa-user"></i>
          <Link to="/profile" className="Link">
            Profile
          </Link>
        </div>

        <div className="update drawer">
          <i class="fas fa-user-edit"></i>
          <Link to="/update" className="Link">
            Edit profile
          </Link>
        </div>
        <div className="booking drawer">
          <i class="fas fa-clipboard-check"></i>
          <Link to="/step1" className="Link">
            Make booking
          </Link>
        </div>
        <div className="cancel drawer">
          <i class="fas fa-clipboard-check"></i>
          <Link to="/cancelbooking" className="Link">
            Cancel booking
          </Link>
        </div>
        <div className="dashboard drawer">
          <i class="fas fa-columns"></i>
          <Link to="/businessdashboard" className="Link">
            Business Dashboard
          </Link>
        </div>
        <div className="dashboard drawer">
          <i class="fas fa-columns"></i>
          <Link to="/clientdashboard" className="Link">
            Client dashboard
          </Link>
        </div>
        {/* condition checking */}
        {user?.email ? (
          <div className="dashboard drawer">
            <i class="fas fa-sign-in-alt"></i>
            <Link to="/logout" className="Link">
              Logout
            </Link>
          </div>
        ) : (
          <div className="dashboard drawer">
            <i class="fas fa-sign-in-alt"></i>
            <Link to="/login" className="Link">
              Login
            </Link>
          </div>
        )}
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment>
          <div onClick={toggleDrawer(anchor, true)}>
            <img src={setting} className="drawer-icon" alt="" />
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
