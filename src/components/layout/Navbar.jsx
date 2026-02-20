import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dev fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Dev Em Crise
        </a>

        <button
          className="nav-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Diário
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Microvitórias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
