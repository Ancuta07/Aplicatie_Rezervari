import React, { useState, useEffect } from "react";
import { useReservations } from "../context/ReservationContext";
import emailjs from "@emailjs/browser"; // ➕ EMAILJS

export default function ReservationModal({ salon, onClose }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState(""); // ➕ EMAIL

  const [showModal, setShowModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const { addReservation } = useReservations();

  useEffect(() => {
    if (salon) {
      setShowModal(true);
      setConfirmed(false);
      setSelectedCity("");
      setEmail("");
      setDate("");
      setTime("");
    } else {
      setShowModal(false);
    }
  }, [salon]);

  if (!salon) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // salvare internă
    addReservation({
      salonId: salon.id,
      name: salon.name,
      city: selectedCity,
      date,
      time,
      email,
    });

    // ➕ TRIMITERE EMAIL CU EMAILJS
    try {
      await emailjs.send(
        "service_h6e4sxz", // SERVICE ID
        "template_4cnvq9l", // TEMPLATE ID Template ID:template_4cnvq9l
        {
          to_email: email,
          salon_name: salon.name,
          city: selectedCity,
          date: date,
          time: time,
        },
        "6N-JLSkSoMv-ilrUj" // PUBLIC KEY
      );
      console.log("Email trimis!");
    } catch (error) {
      console.error("Eroare la trimiterea emailului:", error);
    }

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
        className={`modal-content-modern ${
          showModal ? "modal-pop-in" : "modal-pop-out"
        }`}
      >
        {!confirmed ? (
          <>
            <h2 className="modal-title-modern">
              Rezervare la <span>{salon.name}</span>
            </h2>

            {/* Oraș */}
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

            {/* Email */}
            <div className="modal-field">
              <label className="modal-label-modern">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="modal-input-modern"
                placeholder="exemplu@domeniu.com"
              />
            </div>

            {/* Butoane */}
            <div className="modal-buttons-new">
              <button
                type="button"
                onClick={onClose}
                className="btn-cancel-new"
              >
                Anulează
              </button>

              <button
                type="submit"
                onClick={handleSubmit}
                className="btn-confirm-new"
              >
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
