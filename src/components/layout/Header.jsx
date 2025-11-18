import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <h1 className="header-logo">SalonFinder</h1>

      <nav className="header-nav">
        <Link to="/" className="header-link">
          Saloane
        </Link>

        <Link to="/rezervari" className="header-link">
          Rezervări
        </Link>

        <Link to="/despre" className="header-link">
          Despre
        </Link>
      </nav>
    </header>
  );
}
