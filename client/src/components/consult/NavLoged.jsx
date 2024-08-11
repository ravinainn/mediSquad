import React, { useState } from "react";
// import user from "../../../public/img/user.png";
import { Link } from "react-router-dom";
import user from "../../assets/img/user.png";
import ProfileDashboard from "./ProfileDashboard";

const NavLoged = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div>
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">MediSquad</div>
        <nav className="hidden md:flex space-x-6">
          <Link to={"/"} className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to={"/consult"} className="text-gray-600 hover:text-gray-800">
            Consult
          </Link>
          <Link to={"/"} className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </nav>
        <div className="flex items-center">
          <button onClick={toggleProfile} className="focus:outline-none">
            <img
              src={user}
              className="h-12 w-12 rounded-full"
              alt="User profile"
            />
          </button>
        </div>
      </header>
      {isProfileOpen && <ProfileDashboard onClose={toggleProfile} />}
    </div>
  );
};

export default NavLoged;
