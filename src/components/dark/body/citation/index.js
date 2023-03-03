import React from "react";
import "./citation.css";
import Separator from "../../../common/separator";
import {CitationData} from "../../../data/citation";


function Citation() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const data = CitationData;
    const id = getRandomInt(48)
    const citation = data[id]
    return (
        <div className="citations">
            <Separator />
            <label className="section-title">Citation Au Hasard</label>
            <div className="citation-explain">
                <p>
                    Ci-dessous sera afficher une citation qui sera selectionné au hasard depuis 
                    un fichier contenant plusieurs citation de différente personnes
                </p>
            </div>
            <div className="citation">
                <p className="text">"{citation.citation}"</p>
                <p className="author">{citation.auteur}</p>
            </div>
        </div>
    );
}

export default Citation;