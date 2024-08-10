import React, { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    speciality: "",
    licenseNumber: "",
    passKey: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/doctor/register",
        formData
      );
      setResponseMessage(`Success! Token: ${res.data.token}`);
      redirect("/login");
    } catch (error) {
      setResponseMessage(error.response.data.message || "An error occurred");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold mb-4">Doctor Register</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="text"
        name="speciality"
        placeholder="Speciality"
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="text"
        name="licenseNumber"
        placeholder="License Number"
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="password"
        name="passKey"
        placeholder="Pass Key"
        onChange={handleChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Register
      </button>
      {responseMessage && (
        <p className="mt-4 text-red-500">{responseMessage}</p>
      )}
    </form>
  );
};

export default DoctorRegister;
