import React from "react";
import "./skill-card.css";
function SkillCard({ skill }) {
  return (
   <div className="skill-card " id={skill.className}>
     <div className="skill-icon">{skill.icon}</div>
       <div className="hide">{skill.name}</div>
   </div>
  );
}
export default SkillCard;

//     <label className="skill-name">{skill.name}</label>