// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Saloane from "./pages/Saloane";
import Rezervari from "./pages/Rezervari";
import Despre from "./pages/Despre";
import Footer from "./components/layout/Footer";
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Saloane />} />
        <Route path="/rezervari" element={<Rezervari />} />
        <Route path="/despre" element={<Despre />} />
        {/* Poți adăuga alte pagini mai târziu */}
      </Routes>

      <Footer />
    </Router>
  );
}
