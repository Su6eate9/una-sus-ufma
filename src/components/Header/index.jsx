import React from "react";
import styles from "./styles.module.css";
import saitevaLogo from "../../assets/saiteva-logo.svg";
import unaSusLogo from "../../assets/una-sus-logo.svg";
import searchIcon from "../../assets/lupa.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      {/* Barra de acessibilidade */}
      <div className={styles.accessibilityBar}>
        <div className={styles.accessibilityLinks}>
          <a href="#conteudo" className={styles.accessibilityItem}>
            <span>Ir para o conteúdo</span>
            <span className={styles.accessibilityNumber}>1</span>
          </a>
          <a href="#menu" className={styles.accessibilityItem}>
            <span>Ir para o menu</span>
            <span className={styles.accessibilityNumber}>2</span>
          </a>
          <a href="#busca" className={styles.accessibilityItem}>
            <span>Ir para a busca</span>
            <span className={styles.accessibilityNumber}>3</span>
          </a>
          <a href="#rodape" className={styles.accessibilityItem}>
            <span>Ir para o rodapé</span>
            <span className={styles.accessibilityNumber}>4</span>
          </a>
        </div>
        <div className={styles.accessibilityOptions}>
          <a href="#mapa" className={styles.accessibilityOption}>
            Mapa do site
          </a>
          <a href="#contraste" className={styles.accessibilityOption}>
            Alto contraste
          </a>
          <a href="#acessibilidade" className={styles.accessibilityOption}>
            Acessibilidade
          </a>
        </div>
      </div>

      {/* Conteúdo principal do header */}
      <div className={styles.mainHeader}>
        <div className={styles.logoContainer}>
          <img
            src={saitevaLogo}
            alt="Logo Saiteava"
            className={styles.logoSaiteva}
          />
          <div className={styles.divider}></div>
          <img
            src={unaSusLogo}
            alt="Logo UNA-SUS UFMA"
            className={styles.logoUnaSus}
          />
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Pesquisar"
            className={styles.searchInput}
            id="busca"
          />
          <button href="#" className={styles.searchButton}>
            <img src={searchIcon} alt="" />
          </button>
        </div>

        <nav className={styles.mainNav} id="menu">
          <ul className={styles.navLinks}>
            <li>
              <a href="/inicio" className={styles.navLink}>
                Início
              </a>
            </li>
            <li>
              <a href="/cursos" className={styles.navLink}>
                Cursos
              </a>
            </li>
            <li>
              <a href="/programas" className={styles.navLink}>
                Programas de formação
              </a>
            </li>
            <li>
              <a href="/tutoriais" className={styles.navLink}>
                Tutoriais
              </a>
            </li>
          </ul>
        </nav>

        <a href="/acessar" className={styles.accessButton}>
          Acessar ambiente
        </a>
      </div>
    </header>
  );
};
