import React from "react";

function Footer() {
  return (
    <footer className="footer-dev mt-5 py-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h5>Dev em Crise</h5>
            <p className="mb-2">
              “Documentando o processo, não só o resultado.”
            </p>
            <p className="small text-muted">
              Um projeto público sobre desenvolvimento, consistência e persistência.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Navegação</h5>
            <a href="/">Home</a>
            <a href="/diario">Diário</a>
            <a href="/microvitorias">Microvitórias</a>
            <a href="/projetos">Projetos</a>
            <a href="/sobre">Sobre</a>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Status do Projeto</h5>
            <p>Versão: 0.1.0</p>
            <p>Em desenvolvimento contínuo</p>
            <p>Última atualização: Jan 2026</p>
          </div>

        </div>

        <div className="footer-bottom text-center mt-4 pt-3">
          © 2026 Dev em Crise — Construído com React + PHP
        </div>
      </div>
    </footer>
  );
}

export default Footer;