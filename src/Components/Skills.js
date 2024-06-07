import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>Skills</h1>
        <div className="items">
          {skills.map((data) => (
            <div className="item" data-aos="flip-left" key={data.id}>
              <img src={data.image} alt="" />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
