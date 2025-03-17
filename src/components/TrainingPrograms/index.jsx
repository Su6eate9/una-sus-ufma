import React from "react";
import styles from "./styles.module.css";
import accessibilityProgram from "../../assets/accessibility.png";
import digitalHealthProgram from "../../assets/digital-health.png";

export const TrainingPrograms = () => {
  const programs = [
    {
      id: 1,
      type: "PROGRAMA DE FORMAÇÃO",
      title: "Programa de capacitação em atenção à pessoa com deficiência III",
      image: accessibilityProgram,
      courses: 7,
      hours: 210,
    },
    {
      id: 2,
      type: "PROGRAMA DE FORMAÇÃO",
      title: "Formação básica em saúde digital",
      image: digitalHealthProgram,
      courses: 3,
      hours: 90,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.programsSection}>
        <h2 className={styles.sectionTitle}>Programas de formação</h2>

        <div className={styles.programsGrid}>
          {programs.map((program) => (
            <div key={program.id} className={styles.programCard}>
              <div className={styles.programImage}>
                <img src={program.image} alt={program.title} />
              </div>
              <div className={styles.programInfo}>
                <div className={styles.programHeader}>
                  <span className={styles.programLabel}>{program.type}</span>
                  <h3 className={styles.programTitle}>{program.title}</h3>
                </div>

                <div className={styles.programDescription}>
                  <div className={styles.programDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>&#x1F4DA;</span>
                      <span className={styles.detailText}>
                        {program.courses} cursos
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>&#x1F552;</span>
                      <span className={styles.detailText}>
                        {program.hours} horas
                      </span>
                    </div>
                  </div>

                  <button className={styles.aboutMoreButton}>Saiba mais</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <button className={styles.viewAllButton}>
            Ver todos os programas abertos
          </button>
        </div>
      </div>
    </div>
  );
};
