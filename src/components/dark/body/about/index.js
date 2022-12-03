import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
         <br /> <span className="info-name">Maxime Lameirinhas</span>.
         <br /> jeune développeur passionné avec une envie continue d'en apprendre toujours plus
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}

export default About;