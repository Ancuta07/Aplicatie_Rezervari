import React from "react";

export default function Despre() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen max-w-3xl mx-auto">
      {/* Titlu */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
        Despre SalonFinder
      </h1>

      {/* Paragraf introductiv */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        SalonFinder este o aplicație realizată ca proiect personal de facultate,
        creată cu scopul de a oferi o experiență modernă și intuitivă pentru
        rezervări la saloane de înfrumusețare. Platforma permite utilizatorilor
        să exploreze saloane, să vadă imagini reale, să filtreze după oraș și
        să rezerve rapid serviciile dorite.
      </p>

      {/* Secțiune: Scopul aplicației */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Scopul aplicației
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Ideea din spatele SalonFinder este simplă: să creeze un loc în care
          utilizatorii pot găsi rapid saloane de calitate și pot face o
          rezervare în doar câteva secunde. Ne-am dorit ca această aplicație să
          fie ușor de folosit, rapidă și vizual plăcută, atât pentru utilizatori,
          cât și pentru saloane.
        </p>
      </div>

      {/* Secțiune: Echipa */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Cine a realizat aplicația?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Aplicația a fost dezvoltată de o echipă formată din trei studente pasionate
          de tehnologie și design. Am colaborat la realizarea paginilor, componentelor,
          funcționalităților și aspectului general al platformei.
        </p>
        <p className="text-gray-700 mt-3">
          Acest proiect reprezintă atât o aplicație utilă, cât și o demonstrație a
          cunoștințelor noastre în dezvoltarea web folosind React și Tailwind CSS.
        </p>
      </div>

      {/* Secțiune: Tehnologii */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-10">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">
          Tehnologii folosite
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>React.js</li>
          <li>React Router</li>
          <li>Tailwind CSS</li>
          <li>Context API (pentru gestionarea rezervărilor)</li>
        </ul>
      </div>

      {/* Footer local */}
      <p className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} SalonFinder — proiect personal realizat cu pasiune.
      </p>
    </div>
  );
}
