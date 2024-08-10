import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const res = await axios.get("http://localhost:5001/api/user/test", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(res.data.message);
      } catch (error) {
        setMessage("Unauthorized");
      }
    };

    fetchData();
  }, []);

  return <div>{message}</div>;
};

export default UserDashboard;
