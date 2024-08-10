import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorDashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("doctorToken");
        console.log(token);
        const res = await axios.get("http://localhost:5001/api/doctor/test", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(res.data.message);
      } catch (error) {
        console.log(error);
        setMessage("Unauthorized");
      }
    };

    fetchData();
  }, []);

  return <div>{message}</div>;
};

export default DoctorDashboard;
