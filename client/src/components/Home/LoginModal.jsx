import React, { useState } from "react";
import axios from "axios";
import RegisterModal from "./RegisterModal";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("patient");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    try {
      let res;
      if (loginType === "patient") {
        res = await axios.post(
          "http://localhost:5001/api/user/login",
          formData
        );
        localStorage.setItem("userToken", res.data.token);
        setResponseMessage("Login successful!");
        setTimeout(() => {
          onClose();
        }, 2000);
      } else if (loginType === "doctor") {
        res = await axios.post(
          "http://localhost:5001/api/doctor/login",
          formData
        );
        localStorage.setItem("doctorToken", res.data.token);
        setResponseMessage("Login successful!");
        setTimeout(() => {
          onClose();
          navigate("/doctor-dashboard");
        }, 2000);
      } else {
        // Handle admin login
        console.log("Admin login not implemented yet");
        return;
      }
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "An error occurred"
      );
    }
  };

  const handleNavigateToRegister = () => {
    setShowRegisterModal(true);
  };

  const handleRegisterClose = () => {
    setShowRegisterModal(false);
  };

  return (
    <>
      {!showRegisterModal ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className="flex justify-center mb-4">
              <button
                className={`px-4 py-2 rounded-l-lg ${
                  loginType === "patient"
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setLoginType("patient")}
              >
                Patient
              </button>
              <button
                className={`px-4 py-2 rounded-r-lg ${
                  loginType === "doctor"
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setLoginType("doctor")}
              >
                Doctor
              </button>
              {/* <button
                className={`px-4 py-2 rounded-r-lg ${
                  loginType === "admin"
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setLoginType("admin")}
              >
                Admin
              </button> */}
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-lg w-full hover:bg-teal-600"
              >
                Login
              </button>
            </form>

            {responseMessage && (
              <p className="mt-4 text-center text-red-500">{responseMessage}</p>
            )}

            <div className="mt-4 text-center">
              <a
                href="#"
                className="text-teal-500 hover:text-teal-600"
                onClick={handleNavigateToRegister}
              >
                Sign Up / Register
              </a>
            </div>
          </div>
        </div>
      ) : (
        <RegisterModal
          onClose={handleRegisterClose}
          onNavigateToLogin={handleRegisterClose}
        />
      )}
    </>
  );
};

export default LoginModal;