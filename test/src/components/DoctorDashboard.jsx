import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorDashboard = () => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const token = localStorage.getItem("doctorToken");
  const fetchData = async () => {
    try {
      // console.log(token);
      const res = await axios.get(
        "http://localhost:5001/api/doctor/patientlist",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleJoinAppointment = async (appId, roomUrl) => {
    console.log(appId);
    await axios.get(`http://localhost:5001/api/appointment/${appId}/end`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.href = roomUrl;

    fetchData();
  };

  if (!data.length) return <div>No patients available.</div>; // Check for no data

  return (
    <div className="flex flex-wrap gap-2 w-4/5">
      {data.map((ele) => (
        <div
          key={ele._id}
          className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">Patient Details</h2>
          <p>
            <strong>Name:</strong> {ele.patient.name}
          </p>
          <p>
            <strong>Age:</strong> {ele.patient.age}
          </p>
          <p>
            <strong>Gender:</strong> {ele.patient.gender}
          </p>
          <p>
            <strong>Contact:</strong> {ele.patient.contact}
          </p>
          <p>
            <strong>Aadhar Number:</strong> {ele.patient.aadharNumber}
          </p>
          <p>
            <strong>Status:</strong> {ele.status}
          </p>
          <p>
            <strong>Speciality:</strong> {ele.speciality}
          </p>
          <p>
            <strong>Payment Status:</strong> {ele.paymentStatus}
          </p>

          <button
            onClick={() => handleJoinAppointment(ele._id, ele.dailyRoomName)}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Join Room
          </button>
        </div>
      ))}
    </div>
  );
};

export default DoctorDashboard;
