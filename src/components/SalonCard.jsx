import React from "react";

export default function SalonCard({ salon, selectedCity, onReserve }) {
  return (
    <div className="salon-card">
      <img
        src={salon.image}
        alt={salon.name}
        className="salon-card-img"
      />

      <div className="salon-card-content">
        <h2 className="salon-card-title">{salon.name}</h2>
        <p className="salon-card-description">{salon.description}</p>
        <p className="salon-card-city">Orașe: {salon.city.join(", ")}</p>
        <p className="salon-card-rating">Rating: {salon.rating} ⭐</p>

        <button
          onClick={() =>
            onReserve({
              ...salon,
              selectedCity: selectedCity || salon.city[0], // orașul selectat sau primul oraș
            })
          }
          className="salon-card-btn"
        >
          Rezervă
        </button>
      </div>
    </div>
  );
}
