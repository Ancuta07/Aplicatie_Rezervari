import { Link } from "react-router-dom";

import sfLogo from "../../assets/images/sf1.png";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-logo-container">
        <img src={sfLogo} alt="SalonFinder Logo" className="header-logo-img" />
        <h1 className="header-logo">SalonFinder</h1>
      </div>

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
