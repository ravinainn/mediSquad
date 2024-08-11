import React, { useState } from "react";
import axios from "axios";

const RegisterModal = ({ onClose, onNavigateToLogin }) => {
  const apiUrl = import.meta.env.VITE_API_BACKEND_URL;
  const [isDoctor, setIsDoctor] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    aadhar: "",
    speciality: "",
    licenseNumber: "",
    passKey: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (isDoctor) {
        res = await axios.post(`${apiUrl}/api/doctor/register`, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          speciality: formData.speciality,
          licenseNumber: formData.licenseNumber,
          passKey: formData.passKey,
        });
      } else {
        res = await axios.post(`${apiUrl}/api/user/register`, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }
      // setResponseMessage(`Success! Token: ${res.data.token}`);
      setResponseMessage(`Registration successfully`);
      setTimeout(() => {
        onClose();
        onNavigateToLogin();
      }, 2000);
    } catch (error) {
      setResponseMessage(error.response?.data?.message || "An error occurred");
      // setResponseMessage(`Account already exists.`);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative h-auto max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        {/* Toggle User Type */}
        <div className="mb-4 flex justify-center">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              !isDoctor ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setIsDoctor(false)}
          >
            User
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              isDoctor ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setIsDoctor(true)}
          >
            Doctor
          </button>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 p-2 rounded-lg w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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

          {/* Additional fields for user registration */}
          {!isDoctor && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="aadhar"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  id="aadhar"
                  name="aadhar"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  value={formData.aadhar}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* Conditional Fields for Doctors */}
          {isDoctor && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="speciality"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Speciality
                </label>
                <input
                  type="text"
                  id="speciality"
                  name="speciality"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  value={formData.speciality}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="licenseNumber"
                  className="block text-gray-700 font-bold mb-2"
                >
                  License Number
                </label>
                <input
                  type="text"
                  id="licenseNumber"
                  name="licenseNumber"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="passKey"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Pass Key
                </label>
                <input
                  type="password"
                  id="passKey"
                  name="passKey"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  value={formData.passKey}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Register Button */}
          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded-lg w-full hover:bg-teal-600"
          >
            Register
          </button>
        </form>

        {/* Response Message */}
        {responseMessage && (
          <p className="mt-4 text-center text-red-500">{responseMessage}</p>
        )}

        {/* Navigate to Login */}
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-teal-500 hover:text-teal-600"
            onClick={onNavigateToLogin}
          >
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
