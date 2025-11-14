import React from "react";

export default function SalonCard({ salon, onReserve }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={salon.image}
        alt={salon.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-600">{salon.name}</h2>
        <p className="text-gray-600 mt-1">{salon.description}</p>
        <p className="text-gray-500 mt-2">Oraș: {salon.city}</p>
        <p className="text-yellow-500 mt-1">Rating: {salon.rating} ⭐</p>
        <button
          onClick={() => onReserve(salon)}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Rezervă
        </button>
      </div>
    </div>
  );
}
