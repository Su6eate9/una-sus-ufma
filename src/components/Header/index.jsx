import React from "react";
import "./styles.css";
import saitevaLogo from "../../assets/saiteva-logo.svg";
import unaSusLogo from "../../assets/una-sus-logo.svg";
import searchIcon from "../../assets/lupa.svg";

export const Header = () => {
  return (
    <header className="header">
      {/* Barra de acessibilidade */}
      <div className="accessibility-bar">
        <div className="accessibility-links">
          <a href="#conteudo" className="accessibility-item">
            <span>Ir para o conteúdo</span>
            <span className="accessibility-number">1</span>
          </a>
          <a href="#menu" className="accessibility-item">
            <span>Ir para o menu</span>
            <span className="accessibility-number">2</span>
          </a>
          <a href="#busca" className="accessibility-item">
            <span>Ir para a busca</span>
            <span className="accessibility-number">3</span>
          </a>
          <a href="#rodape" className="accessibility-item">
            <span>Ir para o rodapé</span>
            <span className="accessibility-number">4</span>
          </a>
        </div>
        <div className="accessibility-options">
          <a href="#mapa" className="accessibility-option">
            Mapa do site
          </a>
          <a href="#contraste" className="accessibility-option">
            Alto contraste
          </a>
          <a href="#acessibilidade" className="accessibility-option">
            Acessibilidade
          </a>
        </div>
      </div>

      {/* Conteúdo principal do header */}
      <div className="main-header">
        <div className="logo-container">
          <img
            src={saitevaLogo}
            alt="Logo Saiteava"
            className="logo-saiteava"
          />
          <div className="divider"></div>
          <img
            src={unaSusLogo}
            alt="Logo UNA-SUS UFMA"
            className="logo-unasus"
          />
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar"
            className="search-input"
            id="busca"
          />
          <button href="#" className="search-button">
            <img src={searchIcon} alt="" />
          </button>
        </div>

        <nav className="main-nav" id="menu">
          <ul className="nav-links">
            <li>
              <a href="/inicio" className="nav-link">
                Início
              </a>
            </li>
            <li>
              <a href="/cursos" className="nav-link">
                Cursos
              </a>
            </li>
            <li>
              <a href="/programas" className="nav-link">
                Programas de formação
              </a>
            </li>
            <li>
              <a href="/tutoriais" className="nav-link">
                Tutoriais
              </a>
            </li>
          </ul>
        </nav>

        <a href="/acessar" className="access-button">
          Acessar ambiente
        </a>
      </div>
    </header>
  );
};
