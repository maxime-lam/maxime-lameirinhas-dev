import React from "react";
import "./intern.css";
import Separator from "../../../common/separator";
import {InternData} from "../../../data/intern";
import InternCard from "./internCard";


function Intern() {
    const data = InternData;
    return (
        <div className="interns">
            <Separator />
            <label className="section-title">Stages</label>
            <div className="interns-list">
                {data.map((item) => {
                    return <InternCard item={item} />;
                })}
            </div>
        </div>
    );
}

export default Intern;