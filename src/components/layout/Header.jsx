// src/components/layout/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow-md bg-white py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">SalonFinder</h1>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-blue-500">
          Saloane
        </Link>
        <Link to="/rezervari" className="hover:text-blue-500">
          Rezervări
        </Link>
        <Link to="/despre" className="hover:text-blue-500">
          Despre
        </Link>
      </nav>
    </header>
  );
}
