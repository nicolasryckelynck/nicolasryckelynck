import React from "react";

import "./modalCV.css";

import CV from "../../assets/CV-NR.jpg";

const ModalCV = ({onClose}) => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV-NR.jpg";
    link.click();
  };

  return (
    <div className="cv-container">
      <div className="button-container">
        <button onClick={onClose} className="close-button">
          Fermer
        </button>
        <button onClick={downloadCV} className="download-button">
          Télécharger CV
        </button>
      </div>
      <h2>Mon CV</h2>
      <img src={CV} className="cv_img" alt="CV" />
    </div>
  );
};

export default ModalCV;
