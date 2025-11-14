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

    // închide modalul după 1.5 secunde
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 w-80 transform transition-transform duration-300 ${
          showModal ? "scale-100" : "scale-90"
        }`}
      >
        {!confirmed ? (
          <>
            <h2 className="text-xl font-bold mb-4">Rezervare: {salon.name}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700">Data:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Ora:</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
                >
                  Anulează
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  Confirmă
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <svg
              className="w-12 h-12 text-green-500 mb-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <p className="text-green-600 font-bold text-lg">
              Rezervare confirmată!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
