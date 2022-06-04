import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Watches from "./Pages/Watches/Watches";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Contact/Login/Login";
import Register from "./Pages/Contact/Register/Register";
import Watch from "./Pages/Watch/Watch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="watches" element={<Watches />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="watchDetails/:watchId" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
