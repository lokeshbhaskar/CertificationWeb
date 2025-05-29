 import Frontend from "./pages/certifications/Frontend";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Mern from "./pages/certifications/Mern";
import Python from "./pages/certifications/Python";
import Backend from "./pages/certifications/Backend";
import Aws from "./pages/certifications/Aws";
import Fullstack from "./pages/certifications/Fullstack";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/certifications" element={<Certifications />} /> */}
        <Route path="/certifications/frontend" element={<Frontend />} />
        <Route path="/certifications/fullstack" element={ <Fullstack /> } />
        <Route path="/certifications/mern" element={<Mern />} />
        <Route path="/certifications/backend" element={<Backend />} />
        <Route path="/certifications/python" element={<Python />} />
        <Route path="/certifications/aws" element={<Aws />} />
      </Routes>
    </div>
  );
}

export default App;
