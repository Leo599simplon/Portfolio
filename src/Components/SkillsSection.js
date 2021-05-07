import React from "react";

function SkillsSection({ skill }) {
  return (
    <li className="inView">
      <p className="skill-title">{skill}</p>
    </li>
  );
}

export default SkillsSection;
