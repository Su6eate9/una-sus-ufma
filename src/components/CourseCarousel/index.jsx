import React, { useState, useEffect, useRef } from "react";
import { Courses } from "../Courses";
import "./styles.css";
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
    },
    {
      id: 2,
      title: "Curso de Atualização em Atenção Primária à Saúde",
      description:
        "Capacitação para profissionais da área da saúde com foco nas novas diretrizes da Atenção Primária e sua implementação no Sistema Único de Saúde.",
      image: eletronicsCourse,
    },
    {
      id: 3,
      title: "Gestão de Sistemas de Informação em Saúde",
      description:
        "Desenvolvimento de competências para o uso eficiente de sistemas de informação em saúde, análise de dados e tomada de decisão baseada em evidências.",
      image: eletronicsCourse,
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
    <div className="course-carousel">
      <div className="carousel-container">
        <div
          className="carousel-slide"
          ref={slideRef}
          // style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {courses.map((course) => (
            <div key={course.id} className="carousel-item">
              <div className="carousel-content">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-description">{course.description}</p>
                <button className="cta-button">Saiba mais</button>
              </div>
              <div className="carousel-image">
                <img src={course.image} alt={course.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-navigation">
        <button
          className="carousel-arrow prev"
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
          className="carousel-arrow next"
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

      <div className="carousel-indicators">
        {courses.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      <Courses />
    </div>
  );
};
