import React from "react";

export default function Despre() {
  return (
    <div className="despre-container">
      <h1 className="despre-title">Despre SalonFinder</h1>

      <p className="despre-intro">
        SalonFinder este o aplicație modernă creată pentru a simplifica procesul
        de rezervare la saloanele de înfrumusețare. Indiferent că ai nevoie de un
        tuns, un masaj, un tratament facial sau o programare rapidă la manichiură,
        platforma îți oferă acces instant la cele mai bune saloane din orașul tău.
      </p>

      <div className="despre-box">
        <h2 className="despre-subtitle">Ce oferă aplicația?</h2>

        <p className="despre-text">
          ✔️ O listă selectată de saloane cu imagini reale și informații clare. <br />
          ✔️ Filtre rapide după nume, oraș și servicii. <br />
          ✔️ Rezervări intuitive în câteva secunde. <br />
          ✔️ O experiență modernă, rapidă și plăcută.
        </p>
      </div>

      <div className="despre-box">
        <h2 className="despre-subtitle">De ce este o alegere excelentă?</h2>

        <p className="despre-text">
          SalonFinder elimină telefoanele, căutările lungi și programările dificile.
          Totul este centralizat într-un singur loc: servicii, imagini, ratinguri și disponibilitate.
          În loc să cauți prin zeci de pagini sau site-uri, găsești totul în câteva secunde —
          iar rezervarea se face cu un singur click.
        </p>

        <p className="despre-text mt-extra">
          Scopul aplicației este să aducă simplitate acolo unde era nevoie: în programările
          la salon. Rapid, eficient și accesibil oricui.
        </p>
      </div>

      {/* ----- SECTIUNEA NOUĂ ----- */}
      <div className="despre-benefits-box">
        <h2 className="despre-benefits-title">De ce să folosești SalonFinder? ✨</h2>

        <ul className="despre-benefits-list">
          <li>💇‍♀️ <strong>Găsești rapid saloane de top</strong> – totul într-un singur loc.</li>
          <li>📍 <strong>Filtrare după oraș și servicii</strong> – vezi doar ce te interesează.</li>
          <li>🖼️ <strong>Prezentare vizuală clară</strong> – imagini reale și ratinguri actualizate.</li>
          <li>⚡ <strong>Rezervare în câteva secunde</strong> – fără așteptări sau telefoane.</li>
          <li>⭐ <strong>Experiență modernă și intuitivă</strong> – rapidă și fluidă.</li>
          <li>❤️ <strong>Ideal pentru persoane ocupate</strong> – economisești timp prețios.</li>
        </ul>
      </div>
    </div>
  );
}
