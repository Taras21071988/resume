import React from "react";
import cl from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={cl.skillsWrapper}>
      <h3 className="title">Skills</h3>
      <ul className={cl.skillsList}>
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>Java Script</li>
        <li>Type Script</li>
        <li>React</li>
        <li>Gulp</li>
      </ul>
    </div>
  );
};

export default Skills;
