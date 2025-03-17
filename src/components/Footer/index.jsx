import React from "react";
import styles from "./styles.module.css";
import saiteavaLogo from "../../assets/saiteva-logo.svg";
import unaSusLogo from "../../assets/una-sus-logo.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <img
            src={saiteavaLogo}
            alt="SAITE AVA Logo"
            className={styles.saiteavaLogo}
          />
          <div className={styles.logoSeparator}></div>
          <img
            src={unaSusLogo}
            alt="UNA-SUS UFMA Logo"
            className={styles.unaSusLogo}
          />
        </div>

        <p className={styles.developedBy}>
          Orgulhosamente desenvolvido pelo Grupo SAITE
        </p>

        <div className={styles.footerLinks}>
          <a href="/termos" className={styles.footerLink}>
            Termos de Uso
          </a>
          <span className={styles.linkSeparator}>•</span>
          <a href="/privacidade" className={styles.footerLink}>
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};
