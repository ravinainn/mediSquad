import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorLogout = () => {
  const navigate = useNavigate();

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

      // Clear the token from localStorage and navigate to the login page
      localStorage.removeItem("doctorToken");
      alert(res.data.message);
      navigate("/doctor-login");
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

export default DoctorLogout;
