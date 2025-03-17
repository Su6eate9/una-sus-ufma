import React, { useState, useEffect, useRef } from "react";
import { Courses } from "../Courses";
import styles from "./styles.module.css";
import eletronicsCourse from "../../assets/eletronics.svg";

export const CourseCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const courses = [
    {
      id: 1,
      title:
        "Conheça o novo curso de Formação para Gerentes de Serviços de Especialidades em Saúde Bucal",
      description:
        "A formação tem como objetivo que os gerentes dos CEOs consigam aplicar conceitos, princípios e métodos da construção social das políticas de saúde no Brasil e para entender sua interface com a estruturação da Política Nacional de Saúde Bucal.",
      image: eletronicsCourse,
      modules: 10,
      resources: 20,
      hours: 40,
    },
    {
      id: 2,
      title: "Curso de Atualização em Atenção Primária à Saúde",
      description:
        "Capacitação para profissionais da área da saúde com foco nas novas diretrizes da Atenção Primária e sua implementação no Sistema Único de Saúde.",
      image: eletronicsCourse,
      modules: 10,
      resources: 20,
      hours: 40,
    },
    {
      id: 3,
      title: "Gestão de Sistemas de Informação em Saúde",
      description:
        "Desenvolvimento de competências para o uso eficiente de sistemas de informação em saúde, análise de dados e tomada de decisão baseada em evidências.",
      image: eletronicsCourse,
      modules: 10,
      resources: 20,
      hours: 40,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (slideRef.current) {
      const translateValue = currentSlide * -100;
      slideRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  }, [currentSlide]);

  return (
    <div className={styles.containerBox}>
      <div className={styles.carousel}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack} ref={slideRef}>
            {courses.map((course) => (
              <div key={course.id} className={styles.carouselItem}>
                <div className={styles.carouselContent}>
                  <h2 className={styles.courseTitle}>{course.title}</h2>
                  <p className={styles.courseDescription}>
                    {course.description}
                  </p>
                  <button className={styles.ctaButton}>Saiba mais</button>
                </div>
                <div className={styles.carouselImage}>
                  <img src={course.image} alt={course.title} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.carouselNavigation}>
          <button
            className={`${styles.carouselArrow} ${styles.prev}`}
            onClick={prevSlide}
            aria-label="Slide anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            className={`${styles.carouselArrow} ${styles.next}`}
            onClick={nextSlide}
            aria-label="Próximo slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className={styles.indicators}>
          {courses.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                currentSlide === index ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Courses courses={courses} />
    </div>
  );
};
