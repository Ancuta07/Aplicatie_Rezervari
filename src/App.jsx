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

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Saloane />} />
          <Route path="/rezervari" element={<Rezervari />} />
          <Route path="/despre" element={<Despre />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
