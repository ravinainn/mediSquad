import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("userToken"); // Get the stored user token
      if (!token) {
        return alert("No user is logged in");
      }

      // Send the logout request to the backend
      const res = await axios.get("http://localhost:5001/api/user/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Clear the token from localStorage and navigate to the login page
      localStorage.removeItem("userToken");
      alert(res.data.message);
      navigate("/user-login");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Error logging out");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-4 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default UserLogout;
