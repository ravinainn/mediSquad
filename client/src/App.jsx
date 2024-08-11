import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Consult from "./pages/consult";
import DoctorDashboard from "./components/Home/DoctorDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="consult" element={<Consult />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
