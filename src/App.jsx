import "./App.css";
import { CourseCarousel } from "./components/CourseCarousel";
import { Header } from "./components/Header";
import { TrainingPrograms } from "./components/TrainingPrograms";

export const App = () => {
  return (
    <>
      <Header />
      <CourseCarousel />
      <TrainingPrograms />
    </>
  );
};
