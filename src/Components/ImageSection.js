import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <p className="about-text">
          Issu d’un parcours commercial mais passionné d’informatique depuis
          l’enfance,<br></br>je recherche actuellement un contrat pour une
          alternance en contrat de professionnalisation.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Nom</p>
            <p>Age</p>
            <p>Langues</p>
            <p>Hobbies</p>
          </div>
          <div className="right-section">
            <p>: Leo Hutin</p>
            <p>: 32 ans</p>
            <p>: Français, anglais</p>
            <p>: Randonnée, lecture, tennis de &nbsp;&nbsp;table</p>
          </div>
        </div>
        <button className="btn">Télécharger mon CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
