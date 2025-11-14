import React, { createContext, useState, useContext } from "react";

// Context
const ReservationContext = createContext();

// Provider
export function ReservationProvider({ children }) {
  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations((prev) => [...prev, reservation]);
  };

  return (
    <ReservationContext.Provider value={{ reservations, addReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}

// Hook custom pentru acces mai ușor
export const useReservations = () => useContext(ReservationContext);
