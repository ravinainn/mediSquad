import React, { useState } from "react";

const EmergencyForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    bloodGroup: "",
    issue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data
    console.log(formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto relative">
      <button
        className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        onClick={onClose}
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-6">Emergency Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="patientName">
            Patient Name
          </label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="bloodGroup">
            Blood Group
          </label>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="issue">
            Problem (Issue with Patient)
          </label>
          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg w-full"
        >
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default EmergencyForm;
