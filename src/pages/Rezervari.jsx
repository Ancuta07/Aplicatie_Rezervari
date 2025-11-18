import React from "react";
import { useReservations } from "../context/ReservationContext";

export default function Account() {
  const { reservations } = useReservations();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Rezervările mele
      </h1>

      {reservations.length === 0 ? (
        <p className="text-gray-600">Nu ai făcut nicio rezervare încă.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reservations.map((r, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-bold text-blue-600">{r.name}</h2>
              <p className="text-gray-500">Oraș: {r.city}</p>
              <p className="text-gray-600 mt-1">Data: {r.date}</p>
              <p className="text-gray-600">Ora: {r.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
