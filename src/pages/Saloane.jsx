import React, { useState } from "react";
import salons from "../data/salons";
import SalonCard from "../components/SalonCard";
import ReservationModal from "../components/ReservationModal";

export default function Saloane() {
  const [selectedSalon, setSelectedSalon] = useState(null);

  // Căutări & filtre
  const [search, setSearch] = useState("");
  const [service, setService] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const cities = Array.from(new Set(salons.flatMap((s) => s.city)));


  const filteredSalons = salons.filter((s) => {
    const matchName = s.name.toLowerCase().includes(search.toLowerCase());
   const matchCity =
   selectedCity === "" || s.city.includes(selectedCity);


    const matchService =
      service === "" ||
      (s.services &&
        s.services.some((srv) =>
          srv.toLowerCase().includes(service.toLowerCase())
        ));

    return matchName && matchCity && matchService;
  });

  return (
    <div className="page-container">
      <h1 className="title-page">Saloane disponibile</h1>

      {/* FILTRE — Fără Tailwind, doar CSS-ul tău */}
      <div className="filters-container">
        <input
          type="text"
          placeholder="Caută după nume..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <input
          type="text"
          placeholder="Caută un serviciu: tuns, masaj, manichiură..."
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="city-select"
        >
          <option value="">Toate orașele</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {filteredSalons.length === 0 ? (
        <p className="empty-message">
          Nu există saloane care să corespundă filtrului.
        </p>
      ) : (
        <div className="salon-grid">
          {filteredSalons.map((salon) => (
            <SalonCard
             key={salon.id}
             salon={salon}
             selectedCity={selectedCity}   // trimitem orasul selectat
             onReserve={setSelectedSalon}
            />

          ))}
        </div>
      )}

      <ReservationModal
        salon={selectedSalon}
        onClose={() => setSelectedSalon(null)}
      />
    </div>
  );
}
