import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faGlobe,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

import EcigWeb from "../../assets/webEcig.png";
import SmokeWeb from "../../assets/smokeWeb.png";
import KelklopeWeb from "../../assets/webKelklope.png";

import KelklopeApp from "../../assets/kelklope.png";
import MayApp from "../../assets/mayApp.png";

import SMS from "../../assets/sms.jpg";
import Python from "../../assets/python.png";
import GSB from "../../assets/gsb.png";

const Modal = ({isOpen, onClose}) => {
  const [selectedCategory, setSelectedCategory] = useState("Web");
  const [selectedProject, setSelectedProject] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const projectsByCategory = {
    Web: [
      {
        name: "Kelklope",
        langage: "ReactJS / PHP",
        link: "https://www.kelklope.com/",
        description:
          "Participation au développement d'un site de comparateur de prix dans le domaine de la vape.\n\n J'ai pu développer de nombreuses fonctionnalités en ReactJS ou en PHP.\n",
        images: [KelklopeWeb],
      },
      {
        name: "Smoke Market",
        langage: "ReactJS / PHP",
        link: "https://www.smoke-market.com/",
        description:
          "Participation au développement d'un site d'e-commerce en B2B.\n\n J'ai pu développer de nombreuses fonctionnalités en ReactJS ou en PHP.\n",
        images: [SmokeWeb],
      },
      {
        name: "Ecigplanete",
        langage: "ReactJS / PHP",
        link: "https://www.ecigplanete.com/fr/",
        description:
          "Participation au développement d'un site d'e-commerce en B2C.\n\n J'ai pu développer de nombreuses fonctionnalités en ReactJS ou en PHP.\n",
        images: [EcigWeb],
      },
      {
        name: "GSB",
        langage: "HTML / CSS / PHP",
        description:
          "Création d'une plateforme de gestion de frais avec la possibilité d'ajouter / gérer ses fiches de frais.\nCette plateforme contient également une partie admin et une partie comptable.\n",
        images: [GSB],
      },
    ],
    Mobile: [
      {
        name: "Kelklope",
        langage: "React Native / NodeJS",
        description:
          "Développement entier d'une application de comparateur de prix dans le secteur de la vape.\n\n J'ai pu développer cette application en React Native pour le coté client, et en NodeJS pour le coté serveur.",
        images: [KelklopeApp],
      },
      {
        name: "May'App",
        langage: "React Native / NodeJS",
        description:
          "Développement de plusieurs pages d'une application mobile pour le compte d'une nouvelle start-up. Ces pages ont été développé en React Native et en NodeJs.",
        images: [MayApp],
      },
    ],
    Autres: [
      {
        name: "Envoie de SMS",
        langage: "PHP / HTML & CSS",
        description:
          "Outil d'envoi de SMS à des clients ciblés via différents filtres prédéfinis. L'envoi est effectué par l'utilisation d'une API permettant ce service.",
        images: [SMS],
      },
      {
        name: "Script flux XML / XLS ...",
        langage: "Python - Flask",
        description:
          "Script permettant la lecture et le traitement des données situées dans des fichiers XML / XLS. Une fois la lecture de ces données, un algorithm de correspontance est appliqué afin de faire correspondre les données du fichier et celles de la base de donnée.",
        images: [Python],
      },
    ],
  };

  const projects = selectedCategory ? projectsByCategory[selectedCategory] : [];

  return (
    <div
      className={`modal ${isOpen ? "open" : ""}`}
      style={{display: isOpen ? "" : "none"}}
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>

        <div className="sideBarProjects">
          <button onClick={() => handleCategoryClick("Web")}>
            <div className="categorieProject">
              <FontAwesomeIcon
                icon={faGlobe}
                className="iconProject"
                color="#fff"
              />
              <p className="categorieName">Web</p>
            </div>
          </button>
          <button onClick={() => handleCategoryClick("Mobile")}>
            <div className="categorieProject">
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                className="iconProject"
                color="#fff"
              />
              <p className="categorieName">Mobile</p>
            </div>
          </button>
          <button onClick={() => handleCategoryClick("Autres")}>
            <div className="categorieProject">
              <FontAwesomeIcon
                icon={faCodeBranch}
                className="iconProject"
                color="#fff"
              />
              <p className="categorieName">Autres</p>
            </div>
          </button>
        </div>
        <div className="mainContentProjects">
          <div className="projectsContainer">
            {selectedProject.length === 0 ? (
              projects.map((project, index) => (
                <button
                  key={index}
                  className="projectItem"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{textDecoration: "none"}}
                    >
                      <h3 className="nameProject">{project.name}</h3>
                    </a>
                  ) : (
                    <h3 className="nameProject">{project.name}</h3>
                  )}
                  <p className="langageProject" style={{fontSize: 15}}>
                    {project.langage}
                  </p>
                  <div className="projectImages">
                    {project.images.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={image}
                        alt={`Illustration du projet ${project.name}`}
                        className="ImageProject"
                      />
                    ))}
                  </div>
                </button>
              ))
            ) : (
              <div className="oneProjectContainer">
                <button onClick={() => setSelectedProject([])}>
                  <p className="back">Retour</p>
                </button>
                <div className="projectDetails">
                  <p className="projectName">{selectedProject.name}</p>
                  <img
                    src={selectedProject.images}
                    alt="project"
                    className="image-details"
                  />
                  <p className="projectLangage">{selectedProject.langage}</p>
                  <p className="projectDescription">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
