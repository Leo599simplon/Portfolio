import React, { Fragment } from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import wallpaper from "../img/wallpaper.jpg";

function HomePage() {
  return (
    <div className="HomePage">
      <img className="wallpaperBig" src={wallpaper}></img>
      <img className="wallpaper" src={wallpaper}></img>
      <header className="hero">
        <h1 className="hero-text">
          <span> Leo Hutin</span>
        </h1>
        <p className="h-sub-text">
          Développeur en herbe / en recherche d'alternance
        </p>
        <div className="icons">
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
