import React from "react";
import "./manageleccsharp.css";
import Header from "../header/index";
import Body from "./body/index";
import Footer from "../footer/index";


function Manageleccsharp() {
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
  
  export default Manageleccsharp;