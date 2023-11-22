import React, {useState} from "react";
import Terminal from "react-console-emulator";
import {Modal, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const MyTerminal = ({onClose}) => {
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  const handleClose = () => {
    setShowProjectsModal(false);
  };

  const commands = {
    echo: {
      description: "Affiche une string passée en paramètre",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
    presentation: {
      description: "Présentation de Nicolas Ryckelynck",
      usage: "presentation",
      fn: () => "Je m'appelle Nicolas Ryckelynck",
    },
    projets: {
      description: "Affiche la liste de projets.",
      usage: "projets",
      fn: () => {
        "J'ai pu travailler sur différents projets tel que ...";
        setShowProjectsModal(true);
      },
    },
  };

  return (
    <div className="centered-container">
      <div className="terminal-container">
        <div className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} color="#fff" />
        </div>
        <Terminal promptLabel={"me@Nicolas:~$"} commands={commands} />
      </div>
      <Modal
        show={showProjectsModal}
        onHide={handleClose}
        dialogClassName="centered-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>PROJETS</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <div className="category">Web</div>
          <div className="category">Mobile</div>
          <div className="category">Autres</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyTerminal;
