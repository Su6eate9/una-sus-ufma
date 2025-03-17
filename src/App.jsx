import "./App.css";
import { CourseCarousel } from "./components/CourseCarousel";
import { FeaturesSection } from "./components/FeaturesSection";
import { Header } from "./components/Header";
import { TrainingPrograms } from "./components/TrainingPrograms";
import logosBackground from "./assets/banner-background.png";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <CourseCarousel />
      <TrainingPrograms />
      <FeaturesSection />
      <img
        src={logosBackground}
        alt="logos fundações"
        style={{
          width: "100vw",
          marginBottom: "-0.625rem",
        }}
      />
      <Footer />
    </>
  );
};
