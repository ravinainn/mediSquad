import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Consult from "./pages/consult";
import DoctorDashboard from "./components/Doctor/DoctorDashboard";
import AppointmentPayment from "./pages/AppointmentPayment";
import ChatBox from "./pages/ChatBot";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/payment" element={<AppointmentPayment />} />
        <Route path="/chatbot" element={<ChatBox />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
