import React, { useState } from "react";
import salons from "../data/salons";
import SalonCard from "../components/SalonCard";
import ReservationModal from "../components/ReservationModal";

export default function Home() {
  const [selectedSalon, setSelectedSalon] = useState(null);

  // Căutări & filtre
  const [search, setSearch] = useState(""); // după nume
  const [service, setService] = useState(""); // după serviciu
  const [selectedCity, setSelectedCity] = useState(""); // după oraș

  // orașe unice
  const cities = Array.from(new Set(salons.map((s) => s.city)));

  // FILTRARE COMPLETĂ
  const filteredSalons = salons.filter((s) => {
    const matchName = s.name.toLowerCase().includes(search.toLowerCase());
    const matchCity = selectedCity === "" || s.city === selectedCity;

    const matchService =
      service === "" ||
      s.services.some((srv) =>
        srv.toLowerCase().includes(service.toLowerCase())
      );

    return matchName && matchCity && matchService;
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Saloane disponibile
      </h1>

      {/* FILTRE: nume + oraș + serviciu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Caută după nume */}
        <input
          type="text"
          placeholder="Caută după nume..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Caută după serviciu */}
        <input
          type="text"
          placeholder="Caută un serviciu: tuns, masaj, manichiură..."
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Select oraș */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Toate orașele</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Lista saloanelor */}
      {filteredSalons.length === 0 ? (
        <p className="text-gray-600">
          Nu există saloane care să corespundă filtrului.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSalons.map((salon) => (
            <SalonCard
              key={salon.id}
              salon={salon}
              onReserve={setSelectedSalon}
            />
          ))}
        </div>
      )}

      {/* Modal rezervare */}
      <ReservationModal
        salon={selectedSalon}
        onClose={() => setSelectedSalon(null)}
      />
    </div>
  );
}
