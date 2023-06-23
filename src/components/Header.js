import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={LOGO_URL} />
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li style={{color: onlineStatus ? 'green' : 'red'}}><b>{onlineStatus ? "Online" : "Offline"}</b></li>
            <li>Cart</li>
            <button
              className="login"
              onClick={() => {
                setButtonName(buttonName === "Login" ? "Logout" : "Login");
              }}
            >
              {buttonName}
            </button>
          </ul>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Header;
