import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f7fafc",
        padding: "12px 20px",
        borderTop: "1px solid #eee",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
          color: "#6b7280",
        }}
      >
        © {new Date().getFullYear()} SalonFinder. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
