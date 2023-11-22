import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {faTerminal, faImage} from "@fortawesome/free-solid-svg-icons";

import "./window.css";
import "../modal/modalStyle.css";

import Modal from "../modal/projectExplorer";
import Contact from "./contact";
import ModalCV from "./modalCV";
import Veille from "./veille";

import MyTerminal from "../../terminal";
import chrome from "../../assets/chrome.png";
import FilesImg from "../../assets/files-removebg-preview.png";
import FirstBG from "../../assets/background-window.jpg";
import SecondBG from "../../assets/2ndBG.jpeg";
import ThirdBG from "../../assets/thirdBG.jpg";
import PDF from "../../assets/pdf.png";
import Word from "../../assets/word.png";

const Window = () => {
  const [shellVisibility, setShellVisibility] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  // const [welcomeMessage, setWelcomeMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [isModalImageOpen, setModalImageOpen] = useState(false);
  const [modalCV, setModalCV] = useState(false);
  const [showTechno, setShowTechno] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    `url(${require("../../assets/background-window.jpg")})`
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeImageModal = () => {
    setModalImageOpen(false);
  };

  const backgroundImages = [FirstBG, SecondBG, ThirdBG];

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % backgroundImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  // const messageText = "Bienvenue sur mon portfolio";

  // const addLetter = async () => {
  //   const messageDelay = 100;

  //   for (let i = 0; i < messageText.length; i++) {
  //     setWelcomeMessage((prevMessage) => prevMessage + messageText[i]);
  //     setTimeout(messageDelay);
  //   }
  // };

  // useEffect(() => {
  //   addLetter();
  // }, []);

  const closeTerminal = () => {
    setShellVisibility(false);
  };

  return (
    <div>
      {!showWindow ? (
        <div className="container-welcome">
          <button onClick={() => setShowWindow(true)} className="welcomeText">
            Bienvenue sur mon portfolio
          </button>
          <p className="descriptionText">
            Je m'appelle Nicolas Ryckelynck, j'ai 22 ans et je suis un
            développeur en alternance sur Lyon. J'ai pu réaliser différents
            projets, tel que des sites internets ou des applications mobiles,
            mais également différents outils.
          </p>
        </div>
      ) : (
        <div
          className="window-container"
          style={{
            backgroundImage: selectedImage,
          }}
        >
          <div className="allScreen">
            <div className="screen">
              <button
                className="shell-button-window"
                onClick={() => setShowTechno(true)}
              >
                <img src={Word} alt="Projets" className="files-img-window" />
                <p className="iconName">Veille Technologique</p>
              </button>
              <button
                className="shell-button-window"
                onClick={() => setModalCV(true)}
              >
                <img src={PDF} alt="Projets" className="files-img-window" />
                <p className="iconName">CV</p>
              </button>
              <button
                className="shell-button-window"
                onClick={() => setModalImageOpen(true)}
              >
                <FontAwesomeIcon
                  icon={faImage}
                  color="#fff"
                  class="files-img-window"
                />
                <p className="iconName">Fond d'écran</p>
              </button>
              {/* <button
                className="shell-button-window"
                onClick={() => setShellVisibility(true)}
              >
                <FontAwesomeIcon icon={faTerminal} color="#0072c6" />
                <p className="iconName">PowerShell</p>
              </button> */}
              <button
                className="shell-button-window"
                onClick={() => setContactModalOpen(true)}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#0072ffc6"
                  class="files-img-window"
                />
                <p className="iconName">Contact</p>
              </button>
              <button onClick={openModal} className="files-button-window">
                <img
                  src={FilesImg}
                  alt="Projets"
                  className="files-img-window"
                />
                <p className="iconName">Projets</p>
              </button>
              <button
                className="chrome-button-window"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/nicolas-ryckelynck-b40b86242/"
                  );
                }}
              >
                <img
                  src={chrome}
                  alt="Google Chrome"
                  className="chrome-img-window"
                />
                <p className="iconName">Linkedin</p>
              </button>
            </div>
            <div className="bigPartScreen">
              {modalCV && <ModalCV onClose={() => setModalCV(false)} />}
              {showTechno && <Veille onClose={() => setShowTechno(false)} />}
              {contactModalOpen && (
                <Contact onClose={() => setContactModalOpen(false)} />
              )}
              <Modal isOpen={isModalOpen} onClose={closeModal} />

              {isModalImageOpen ? (
                <div className="imageCarousselContainer">
                  <div className="caroussel">
                    <button onClick={prevImage}>
                      <FontAwesomeIcon icon={faArrowLeft} color="#fff" />
                    </button>
                    <img
                      src={backgroundImages[currentImageIndex]}
                      alt={`Background ${currentImageIndex + 1}`}
                      className="imageCaroussel"
                    />
                    <button onClick={nextImage}>
                      <FontAwesomeIcon icon={faArrowRight} color="#fff" />
                    </button>
                  </div>
                  <section class="buttonSection">
                    <button
                      onClick={closeImageModal}
                      className="buttonCloseImageCaroussel"
                    >
                      Fermer
                    </button>
                    <button
                      onClick={() => {
                        setSelectedImage(
                          `url(${backgroundImages[currentImageIndex]})`
                        );
                        setModalImageOpen(false);
                      }}
                      className="buttonImageCaroussel"
                    >
                      Sauvegarder
                    </button>
                  </section>
                </div>
              ) : (
                <></>
              )}
            </div>

            {shellVisibility && <MyTerminal onClose={closeTerminal} />}
          </div>
          <div className="window-footer">
            {/* <button
              className="shell-button"
              onClick={() => setShellVisibility(true)}
            >
              <FontAwesomeIcon icon={faTerminal} color="#fff" />
            </button> */}
            <button
              className="chrome-button"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/nicolas-ryckelynck-b40b86242/"
                );
              }}
            >
              <img
                src={chrome}
                alt="Google Chrome"
                className="chrome-img-footer"
              />
            </button>
            <button onClick={openModal}>
              <img
                src={FilesImg}
                alt="Projets"
                className="chrome-img-footer"
                style={{height: "100%"}}
              />
            </button>
            <button
              className="shell-button"
              onClick={() => setContactModalOpen(true)}
            >
              <FontAwesomeIcon icon={faEnvelope} color="#0072c6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Window;
