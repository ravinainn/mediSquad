import React, { useState } from "react";
import axios from "axios";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/user/login",
        formData
      );
      localStorage.setItem("userToken", res.data.token); // Store the token
      setResponseMessage("Login successful!");
    } catch (error) {
      setResponseMessage(error.response.data.message || "An error occurred");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold mb-4">User Login</h2>
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
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Login
      </button>
      {responseMessage && (
        <p className="mt-4 text-red-500">{responseMessage}</p>
      )}
    </form>
  );
};

export default UserLogin;
