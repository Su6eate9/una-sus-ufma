import React from "react";
import styles from "./styles.module.css";

export const Courses = ({ courses }) => {
  return (
    <div className={styles.coursesSection}>
      <h2 className={styles.sectionTitle}>Cursos</h2>

      <div className={styles.coursesGrid}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <div className={styles.courseImage}>
              <img src={course.image} alt={course.title} />
            </div>
            <div className={styles.courseInfo}>
              <span className={styles.courseLabel}>CURSO</span>
              <h3 className={styles.courseTitle}>{course.title}</h3>

              <div className={styles.courseDetails}>
                <div className={styles.courseDescription}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>&#x2295;</span>
                    <span className={styles.detailText}>
                      {course.modules} módulos
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>&#x1F4C4;</span>
                    <span className={styles.detailText}>
                      {course.resources} recursos
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>&#x1F552;</span>
                    <span className={styles.detailText}>
                      {course.hours} horas
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
          Ver todos os cursos abertos
        </button>
      </div>
    </div>
  );
};
