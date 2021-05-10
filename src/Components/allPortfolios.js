import shifumi2 from "../img/portImages/shifumi2.jpg";
import tetris from "../img/portImages/tetris.jpg";
import retravailler from "../img/portImages/retravailler.png";
import campus from "../img/portImages/campus.jpg";
import port3 from "../img/portImages/port3.jpg";
import poste from "../img/portImages/poste.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const portfolios = [
  {
    id: 1,
    category: "Javascript",
    link1: "https://github.com/Leo599simplon/Shifoumi",
    icon1: <FontAwesomeIcon icon={faGithub} />,
    image: shifumi2,
    title: "Shifoumi Vanilla JS",
  },
  {
    id: 2,
    category: "Javascript",
    link1: "https://github.com/Leo599simplon/",
    icon1: <FontAwesomeIcon icon={faGithub} />,
    image: tetris,
    title: "Tetris Vanilla JS",
  },
  {
    id: 3,
    category: "Javascript",
    link1: "www.github.com",
    link2: "www.github.com",
    icon1: <FontAwesomeIcon icon={faGithub} />,
    icon2: <FontAwesomeIcon icon={faGlobe} />,
    image: port3,
    title: "Application web de recherche",
  },
  {
    id: 4,
    category: "PHP",
    link1: "https://github.com/mediatorviolet/Retravailler.re",
    link2: "https://retravailler.herokuapp.com/",
    icon1: <FontAwesomeIcon icon={faGithub} />,
    icon2: <FontAwesomeIcon icon={faGlobe} />,
    image: retravailler,
    title: "Retravailler.re",
  },
  {
    id: 5,
    category: "PHP",
    link1: "https://github.com/Leo599simplon/Gestion-Ordinateur",
    link2: "https://gestion-ordinateur-leo.herokuapp.com/",
    icon1: <FontAwesomeIcon icon={faGithub} />,
    icon2: <FontAwesomeIcon icon={faGlobe} />,
    image: poste,
    title: "Administration de poste/sessions",
  },
  {
    id: 6,
    category: "HTML",
    link1: "https://github.com/Leo599simplon/Leo599simplon.github.io",
    link2: "https://leo599simplon.github.io/",
    icon1: <FontAwesomeIcon icon={faGithub} />,
    icon2: <FontAwesomeIcon icon={faGlobe} />,
    image: campus,
    title: "Campus de l'oasis",
  },
];

export default portfolios;
