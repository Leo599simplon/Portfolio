import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"À propos de moi"} span={"À propos de moi"} />
      <ImageSection />
      <Title title={"Mes compétences"} span={""} />
      <ul className="compItems">
        <SkillsSection skill={"Javascript"} />
        <SkillsSection skill={"React Js"} />
        <SkillsSection skill={"Wordpress"} />
        <SkillsSection skill={"MySQL"} />
        <SkillsSection skill={"Figma"} />
        <SkillsSection skill={"Bootstrap"} />
        <SkillsSection skill={"Laravel"} />
        <SkillsSection skill={"PHP"} />
        <SkillsSection skill={"Web design"} />
        <SkillsSection skill={"UI/Ux Design"} />
      </ul>
      {/* 
      <Title title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Web design"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div> */}
    </div>
  );
}

export default AboutPage;
