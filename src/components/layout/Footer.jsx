import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        © {new Date().getFullYear()} SalonFinder. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
