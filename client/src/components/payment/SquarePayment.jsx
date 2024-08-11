import React, { useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const apiUrl = import.meta.env.VITE_API_BACKEND_URL;
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-fit min-h-92">
      <p className="my-2 text-lg font-base">Using Credit Card</p>

      <PaymentForm
        applicationId="sandbox-sq0idb-Q1btrewuHWqusyPaTAwWkA"
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          console.log("token:", token.token);
          console.log("verifiedBuyer:", verifiedBuyer);
          console.log(JSON.stringify(token));
          const response = await axios.post(
            `${apiUrl}/api/appointment/payment`,
            {
              appointmentId: localStorage.getItem("appointmentId"),
              sourceId: token.token,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setMessage(response.data.message);
          console.log(response.status);
          if (response.status === 200) {
            window.location.href = response.data.roomUrl;
            // window.location.replace(response.data.roomUrl);
            // window.location.href(response.data.roomUrl);
          }
        }}
        locationId="L4759RK2KZYHY"
      >
        <CreditCard />
        {message && (
          <p className="pt-2 text-red-400 text-sm font-semibold">{message} !</p>
        )}
      </PaymentForm>
    </div>
  );
};

export default Payment;
