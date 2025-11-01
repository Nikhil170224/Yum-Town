import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName,setbtnName] = useState("login");

  const onlinestatus = useOnlineStatus();
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 object-contain"
          src={LOGO_URL}
          alt="App Logo"
        />
        <h2 className="text-xl font-semibold">YumTown</h2>
      </div>

      {/* Center: Navigation */}
      <nav className="flex space-x-10">
        <ul className="flex space-x-6">
          <li>Online Status: {onlinestatus ? "🟢" : "🔴"}</li>
          <li className="hover:text-orange-600 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-600 font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-orange-600 font-bold">
            <Link to="/offer">Offers</Link>
          </li>
          <li className="hover:text-orange-600 font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-orange-600 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="relative">
            🛒{" "}
            <span className="absolute -top-2 -right-2 text-sm bg-gray-200 rounded-full px-1">
              2
            </span>
          </li>
        </ul>

        <button
          className="mx-4 border box-border w-25 h-8 items-center px-6 py-1 rounded-md hover:bg-gray-100 "
          onClick={() => setbtnName(btnName === "login" ? "logout" : "login")}
        >
          {btnName}
        </button>
      </nav>
    </header>
  );
};

//Defaults exports
export default Header;