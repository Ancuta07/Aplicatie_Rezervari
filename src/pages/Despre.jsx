import React from "react";

export default function Despre() {
  return (
    <div className="despre-container">
      <h1 className="despre-title">Despre SalonFinder</h1>

      <p className="despre-intro">
        SalonFinder este o aplicație realizată ca proiect personal de facultate,
        creată cu scopul de a oferi o experiență modernă și intuitivă pentru
        rezervări la saloane de înfrumusețare. Platforma permite utilizatorilor
        să exploreze saloane, să vadă imagini reale, să filtreze după oraș și
        să rezerve rapid serviciile dorite.
      </p>

      <div className="despre-box">
        <h2 className="despre-subtitle">Scopul aplicației</h2>
        <p className="despre-text">
          Ideea din spatele SalonFinder este simplă: să creeze un loc în care
          utilizatorii pot găsi rapid saloane de calitate și pot face o
          rezervare în doar câteva secunde. Ne-am dorit ca această aplicație să
          fie ușor de folosit, rapidă și vizual plăcută, atât pentru utilizatori,
          cât și pentru saloane.
        </p>
      </div>

      <div className="despre-box">
        <h2 className="despre-subtitle">Cine a realizat aplicația?</h2>
        <p className="despre-text">
          Aplicația a fost dezvoltată de o echipă formată din trei studente pasionate
          de tehnologie și design. Am colaborat la realizarea paginilor, componentelor,
          funcționalităților și aspectului general al platformei.
        </p>
        <p className="despre-text mt-extra">
          Acest proiect reprezintă atât o aplicație utilă, cât și o demonstrație a
          cunoștințelor noastre în dezvoltarea web folosind React și Tailwind CSS.
        </p>
      </div>

      <div className="despre-tech-box">
        <h2 className="despre-tech-title">Tehnologii folosite</h2>
        <ul className="despre-tech-list">
          <li>React.js</li>
          <li>React Router</li>
          <li>Tailwind CSS</li>
          <li>Context API (gestionarea rezervărilor)</li>
        </ul>
      </div>

      
    </div>
  );
}
