import React from "react";
import "./menageleccsharp.css";
import Header from "../header/index";
import Body from "./body/index";
import Footer from "../footer/index";


function Menageleccsharp() {
    return ( 
    <div className="manageleccsharp">
      <div>
          <Header />
      </div>
      <div>
          <Body />
      </div>
      <div>
          <Footer />
      </div>
    </div>
    );
  }
  
  export default Menageleccsharp;