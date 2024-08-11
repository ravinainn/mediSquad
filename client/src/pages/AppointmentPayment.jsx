import React, { useState } from "react";

import NavLoged from "../components/consult/NavLoged";
import Payment from "../components/payment/SquarePayment";

const AppointmentPayment = () => {
  return (
    <div className="min-h-screen">
      <NavLoged />
      <div className=" flex flex-col justify-center items-center">
        <h1 className="py-2 text-2xl  font-semibold">Using Square Gateway </h1>

        <Payment />
      </div>
    </div>
  );
};

export default AppointmentPayment;
