import React, { useState, useEffect } from "react";
import { useReservations } from "../context/ReservationContext";

export default function ReservationModal({ salon, onClose }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const { addReservation } = useReservations();

  useEffect(() => {
    if (salon) {
      setShowModal(true);
      setConfirmed(false);
    } else {
      setShowModal(false);
    }
  }, [salon]);

  if (!salon) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addReservation({
      salonId: salon.id,
      name: salon.name,
      city: salon.city,
      date,
      time,
    });

    setConfirmed(true);

    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div
      className={`modal-overlay ${
        showModal ? "modal-visible" : "modal-hidden"
      }`}
    >
      <div
        className={`modal-content ${
          showModal ? "modal-scale-in" : "modal-scale-out"
        }`}
      >
        {!confirmed ? (
          <>
            <h2 className="modal-title">Rezervare: {salon.name}</h2>

            <form onSubmit={handleSubmit} className="modal-form">
              <div>
                <label className="modal-label">Data:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="modal-input"
                />
              </div>

              <div>
                <label className="modal-label">Ora:</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="modal-input"
                />
              </div>

              <div className="modal-buttons">
                <button type="button" onClick={onClose} className="btn-cancel">
                  Anulează
                </button>

                <button type="submit" className="btn-confirm">
                  Confirmă
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="modal-confirm-wrapper">
            <svg
              className="modal-check"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>

            <p className="modal-confirm-text">Rezervare confirmată!</p>
          </div>
        )}
      </div>
    </div>
  );
}
