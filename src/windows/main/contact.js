// Contact.js
import React from "react";

import "./contact.css";

const Contact = ({onClose}) => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  return (
    <div className="contact-container">
      <button onClick={onClose} className="close-button">
        Annuler
      </button>
      <h2>Contactez-moi</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit" className="sendMessage">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
