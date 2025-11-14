// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Account from "./pages/Account";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cont" element={<Account />} />
        {/* Poți adăuga alte pagini mai târziu */}
      </Routes>
    </Router>
  );
}
