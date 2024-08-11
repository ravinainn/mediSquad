import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Consult from "./pages/consult";
import DoctorDashboard from "./components/Home/DoctorDashboard";
import AppointmentPayment from "./pages/AppointmentPayment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/payment" element={<AppointmentPayment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
