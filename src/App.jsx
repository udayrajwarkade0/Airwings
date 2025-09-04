import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Offers from "./components/offfers/Offers";
import Seats from "./components/seats/Seats";
import Destinations from "./components/destination/Destination";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
