import React from "react";
import styles from "./styles.module.css";
import innovationIcon from "../../assets/innovation-icon.svg";
import autonomyIcon from "../../assets/autonomy-icon.svg";
import interactivityIcon from "../../assets/interactivity-icon.svg";

export const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: innovationIcon,
      title: "Inovação",
      description:
        "Construa conexões por meio de um ambiente inovador, acessível em Libras e disponível em todas as plataformas digitais.",
    },
    {
      id: 2,
      icon: autonomyIcon,
      title: "Autonomia",
      description:
        "Escolha onde e quando estudar. Com o SAITE AVA você tem autonomia para buscar conhecimento.",
    },
    {
      id: 3,
      icon: interactivityIcon,
      title: "Interatividade",
      description:
        "Aprenda por meio de diversos recursos, que vão além dos e-books interativos. Tenha acesso a vídeos, infográficos, games, audiobooks, podcasts e muito mais!",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.iconContainer}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className={styles.featureIcon}
                />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
