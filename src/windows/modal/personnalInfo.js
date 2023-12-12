// Contact.js
import React, {useState} from "react";
import {Chart} from "react-google-charts";

import "./personnalInfo.css";

import chrome from "../../assets/nico-photo.jpg";
import Synthese from "../../assets/synthèse-nicolas_image.jpg";

const PersonalInformations = ({onClose}) => {
  const [categorieSelected, setCategorieSelected] = useState(1);

  const informationsContainer = (id, title) => {
    return (
      <section className="perso-info-container">
        <div className="input-container">
          <label className="label-element">Nom:</label>
          <input
            type="text"
            placeholder="Ryckelynck"
            disabled
            className="input-element"
          />
        </div>
        <div className="input-container">
          <label className="label-element">Prénom:</label>
          <input
            type="text"
            placeholder="Nicolas"
            disabled
            className="input-element"
          />
        </div>
        <div className="input-container">
          <label className="label-element">Date de naissance</label>
          <input
            type="text"
            placeholder="19 Avril 2001"
            disabled
            className="input-element"
          />
        </div>
        <div className="input-container">
          <label className="label-element">Lieu de travail:</label>
          <input
            type="text"
            placeholder="Lyon"
            disabled
            className="input-element"
          />
        </div>
        <div className="input-container">
          <textarea
            className="personnalDescription"
            placeholder="Etudiant de 22 ans, je suis preneur de toutes opportunités afin d'acquérir d'amples connaissances sur différentes technologies."
            disabled
          ></textarea>
        </div>
      </section>
    );
  };

  const syntheseElements = () => {
    return (
      <img src={Synthese} alt="tableau-synthèse" className="synthese-img" />
    );
  };

  const technologies = () => {
    const pieData = [
      ["Activité", "Heures par jour"],
      ["Autonomie", 6],
      ["Flexibilité", 4],
      ["Curiosité", 4],
      ["Responsable", 5],
      ["Polyvalent", 3],
    ];

    const pieOptions = {
      title: "Ma personnalité",
      backgroundColor: {
        fill: "none",
      },
      legend: {textStyle: {color: "white"}},
      titleTextStyle: {color: "white"},
      pieSliceTextStyle: {color: "white"},
    };

    const data = [
      {label: "ReactJS / Native", value: 8.5},
      {label: "NodeJS - Express", value: 8},
      {label: "HTML / CSS", value: 9},
      {label: "PHP / MYSQL", value: 7.5},
      {label: "Python", value: 7},
    ];

    return (
      <div className="twice-informations">
        <div className="technicals">
          {data.map((bar, index) => (
            <div key={index} className="bar">
              <div className="label">{bar.label}</div>
              <div className="bar-graph">
                <div
                  className="bar-fill"
                  style={{width: `${(bar.value / 10) * 100}%`}}
                ></div>
              </div>
              <div className="value">{bar.value}</div>
            </div>
          ))}
        </div>
        <Chart
          chartType="PieChart"
          data={pieData}
          options={pieOptions}
          width={"100%"}
          height={"100%"}
        />
      </div>
    );
  };

  const handleInformations = [
    {
      value: 1,
      title: "Informations personnelles",
      display: informationsContainer(),
    },
    {
      value: 2,
      title: "Compétences techniques et personnelles",
      display: technologies(),
    },
    {
      value: 3,
      title: "Tableau de synthèse",
      display: syntheseElements(),
    },
  ];

  const buttonCategories = (id, title) => {
    return (
      <button className="navBarButton" onClick={() => setCategorieSelected(id)}>
        {title}
      </button>
    );
  };

  return (
    <div className="personnalInfoContainer">
      <div className="headerPerso">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <div className="portrait-container">
          <img src={chrome} className="portrait-img" alt="personnel" />
        </div>
        <h2 className="name">Nicolas Ryckelynck</h2>
        <div className="navBarContainer">
          {buttonCategories(1, "Informations personnelles")}
          {buttonCategories(2, "Compétences techniques et personnelles")}
          {buttonCategories(3, "Tableau de synthèse")}
        </div>
      </div>

      <div className="informations-container">
        <h2 className="titleCategorie">
          {
            handleInformations.find(
              (element) => element.value === categorieSelected
            )?.title
          }
        </h2>
        {
          handleInformations.find(
            (element) => element.value === categorieSelected
          )?.display
        }
      </div>
    </div>
  );
};

export default PersonalInformations;
