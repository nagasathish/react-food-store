import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="p-10">
          <Link to="/">
            <img className="w-auto h-16" src={LOGO_URL} />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/instamart">Instamart</Link>
            </li>
            <li className="px-4">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li
              className="px-4"
              style={{ color: onlineStatus ? "green" : "red" }}
            >
              <b>{onlineStatus ? "Online" : "Offline"}</b>
            </li>
            <li className="px-4">
              <Link to="/cart">Cart - {cartItems.length}</Link>
            </li>
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
