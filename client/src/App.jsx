import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Consult from "./pages/consult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="consult" element={<Consult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
