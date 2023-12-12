// Contact.js
import React, {useState} from "react";

import "./contact.css";

const Contact = ({onClose}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Créer la chaîne de requête pour le lien mailto
    const mailtoLink = `mailto:${
      formData.email
    }?subject=Message%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}`;

    // Ouvrir le client de messagerie par défaut
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <button onClick={onClose} className="close-button">
        Annuler
      </button>
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="sendMessage">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
