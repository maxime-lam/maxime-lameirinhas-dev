import React from "react";
import "./work.css";
import Separator from "../../../common/separator";
function Work() {
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Expérience professionnelle</label>
      <div className="work-list">
        <p>pas de contenu pour l'instant</p>
      </div>
    </div>
  );  
}

export default Work;

/**
 *      code de map des item de travail 
 * 
 *       {data.map((item) => {
          return <WorkCard item={item} />;
        })}
 */