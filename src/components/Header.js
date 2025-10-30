import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName,setbtnName] = useState("login");

  const onlinestatus = useOnlineStatus();
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://png.pngtree.com/png-clipart/20230922/original/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_12522801.png"
          alt="App Logo"
        />
        <h2>YumTown</h2>
      </div>

      <nav className="navbar">
        <ul>
          <li>Online Status: {onlinestatus === true ? " 🟢" : " 🔴"} </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/offer">Offers</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="cart">
            <a href="#">
              🛒 <span className="badge">2</span>
            </a>
          </li>
        </ul>
        <button
          className="btn"
          onClick={() => {
            setbtnName(btnName === "login" ? "logout" : "login");
          }}
        >
          {btnName}
        </button>
      </nav>
    </header>
  );
};

//Defaults exports
export default Header;