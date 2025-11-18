import React from "react";
import { useReservations } from "../context/ReservationContext";

export default function Rezervari() {
  const { reservations } = useReservations();

  return (
    <div className="rez-page-container">
      <h1 className="rez-title">Rezervările mele</h1>

      {reservations.length === 0 ? (
        <p className="rez-empty-text">Nu ai făcut nicio rezervare încă.</p>
      ) : (
        <div className="rez-grid">
          {reservations.map((r, index) => (
            <div key={index} className="rez-card">
              <h2 className="rez-card-title">{r.name}</h2>
              <p className="rez-card-city">Oraș: {r.city}</p>
              <p className="rez-card-date">Data: {r.date}</p>
              <p className="rez-card-time">Ora: {r.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
