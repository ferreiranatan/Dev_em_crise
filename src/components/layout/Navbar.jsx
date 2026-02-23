import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dev fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Dev em Crise
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/diario">Diário</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/analytics">Analytics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projetos">Projetos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;