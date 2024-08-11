import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleChatBotClick = () => {
    navigate("/chatbot");
  };
  const handleAbout = () => {
    navigate("/about");
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("doctorToken"); // Get the stored token
      if (!token) {
        return alert("No doctor is logged in");
      }

      // Send the logout request to the backend
      const res = await axios.get("http://localhost:5001/api/doctor/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Clear the token from localStorage and navigate to the main page
      localStorage.removeItem("doctorToken");
      alert(res.data.message);
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Logout error:", error);
      alert("Error logging out");
    }
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-teal-600">MediSquad</div>
        <nav className="space-x-8">
          <a className="text-gray-600 hover:text-teal-600 cursor-pointer">
            Home
          </a>
          <a className="text-gray-600 hover:text-teal-600 cursor-pointer" onClick={handleAbout}>
            About
          </a>
          <a  className="text-gray-600 hover:text-teal-600 cursor-pointer" onClick={handleChatBotClick} >
            ChatBot
          </a>
        </nav>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
