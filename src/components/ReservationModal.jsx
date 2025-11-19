import React, { useState, useEffect } from "react";
import { useReservations } from "../context/ReservationContext";

export default function ReservationModal({ salon, onClose }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const { addReservation } = useReservations();

  // Când se deschide modalul
  useEffect(() => {
    if (salon) {
      setShowModal(true);
      setConfirmed(false);
      setSelectedCity(""); // resetare oraș
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
      city: selectedCity,
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
      className={`modal-overlay ${showModal ? "modal-visible" : "modal-hidden"}`}
    >
      <div
        className={`modal-content-modern ${
          showModal ? "modal-pop-in" : "modal-pop-out"
        }`}
      >
        {!confirmed ? (
          <>
            <h2 className="modal-title-modern">
              Rezervare la <span>{salon.name}</span>
            </h2>

            {/* Select oraș */}
            <div className="modal-field">
              <label className="modal-label-modern">Alege orașul:</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                required
                className="modal-input-modern"
              >
                <option value="">Selectează orașul</option>
                {salon.city.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Data */}
            <div className="modal-field">
              <label className="modal-label-modern">Data:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="modal-input-modern"
              />
            </div>

            {/* Ora */}
            <div className="modal-field">
              <label className="modal-label-modern">Ora:</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="modal-input-modern"
              />
            </div>

            {/* Buttons */}
            <div className="modal-buttons-new">
              <button type="button" onClick={onClose} className="btn-cancel-new">
                Anulează
              </button>

              <button type="submit" onClick={handleSubmit} className="btn-confirm-new">
                Confirmă rezervarea
              </button>
            </div>
          </>
        ) : (
          <div className="modal-confirm-wrapper-new">
            <div className="checkmark-circle">
              <span className="checkmark">✓</span>
            </div>
            <p className="confirm-message">Rezervarea a fost trimisă!</p>
          </div>
        )}
      </div>
    </div>
  );
}
