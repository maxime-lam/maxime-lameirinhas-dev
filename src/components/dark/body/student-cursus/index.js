import React from "react";
import "./StudentCursus.css";
import Separator from "../../../common/separator/index";
import {StudentData} from "../../../data/studentCursus";
import StudeCard from "./StudeCard";
import "./StudentCursus.css"

function StudentCursus() {
  const data = StudentData;
  return (
    <div className="studentCursus">
      <Separator /> 
        <label className="section-title">Cursus étudiant</label>
        <div className="skills-container">
      {data.map((item) => {
        return (
          <div className="skills-section">
              <ul>
                <li><label className="skills-section-title">{item.type}</label></li>
              </ul>
              <div className={item.class}>
            {item.list.map((stude) => {
                return <StudeCard stude={stude} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default StudentCursus;   