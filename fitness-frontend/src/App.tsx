import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Members from "./pages/Members";
import Trainers from "./pages/Trainers";

function App() {
  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/trainers" element={<Trainers />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

export default App;
