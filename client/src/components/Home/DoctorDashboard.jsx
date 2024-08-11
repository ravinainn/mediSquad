import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorDashboard = () => {
  const apiUrl = import.meta.env.VITE_API_BACKEND_URL;
  const [data, setData] = useState([]);
  const token = localStorage.getItem("doctorToken");

  const fetchData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/doctor/patientlist`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleJoinAppointment = async (appId, roomUrl) => {
    try {
      await axios.get(`${apiUrl}/api/appointment/${appId}/end`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.href = roomUrl;
    } catch (error) {
      console.log(error);
    }
    fetchData();
  };

  if (!data.length)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-2xl font-bold text-gray-600">
          No patients available.
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-teal-600">
        Doctor Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((ele) => (
          <div
            key={ele._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-teal-700">
                Patient Details
              </h2>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {ele.patient.name}
                </p>
                <p>
                  <span className="font-semibold">Age:</span> {ele.patient.age}
                </p>
                <p>
                  <span className="font-semibold">Gender:</span>{" "}
                  {ele.patient.gender}
                </p>
                <p>
                  <span className="font-semibold">Contact:</span>{" "}
                  {ele.patient.contact}
                </p>
                <p>
                  <span className="font-semibold">Aadhar Number:</span>{" "}
                  {ele.patient.aadharNumber}
                </p>
                <p>
                  <span className="font-semibold">Status:</span> {ele.status}
                </p>
                <p>
                  <span className="font-semibold">Speciality:</span>{" "}
                  {ele.speciality}
                </p>
                <p>
                  <span className="font-semibold">Payment Status:</span>{" "}
                  {ele.paymentStatus}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button
                onClick={() =>
                  handleJoinAppointment(ele._id, ele.dailyRoomName)
                }
                className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              >
                Join Room
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorDashboard;
