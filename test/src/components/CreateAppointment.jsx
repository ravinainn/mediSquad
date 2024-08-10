import React, { useState } from "react";
import axios from "axios";

const CreateAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    aadharNumber: "",
    speciality: "",
  });

  const [roomUrl, setRoomUrl] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("userToken"); // Assuming user is logged in
      const res = await axios.post(
        "http://localhost:5001/api/appointment/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRoomUrl(res.data.roomUrl);
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4">Create Appointment</h2>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          onChange={handleChange}
          value={formData.name}
          className="mb-4 p-2 w-full border rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          value={formData.age}
          className="mb-4 p-2 w-full border rounded"
          required
        />
        <select
          name="gender"
          onChange={handleChange}
          value={formData.gender}
          className="mb-4 p-2 w-full border rounded"
          required
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          onChange={handleChange}
          value={formData.contact}
          className="mb-4 p-2 w-full border rounded"
          required
        />
        <input
          type="text"
          name="aadharNumber"
          placeholder="Aadhar Number"
          onChange={handleChange}
          value={formData.aadharNumber}
          className="mb-4 p-2 w-full border rounded"
          required
        />
        <input
          type="text"
          name="speciality"
          placeholder="Speciality"
          onChange={handleChange}
          value={formData.speciality}
          className="mb-4 p-2 w-full border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Create Appointment
        </button>
      </form>

      {roomUrl && (
        <div className="mt-8">
          <a
            href={roomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-2 rounded"
          >
            Join Room
          </a>
        </div>
      )}
    </div>
  );
};

export default CreateAppointment;
