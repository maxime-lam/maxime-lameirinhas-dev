import React from "react";
import "./manageleccsharp.css";
import Header from "../header/index";
import About from "./about/index";
import Features from "./features/index";
import Realisation from "./realisation/index"
import Footer from "../footer/index";


function Manageleccsharp() {
    return ( 
    <div className="manageleccsharp">
      <div>
          <Header />
      </div>
      <div>
          <About />
      </div>
      <div>
          <Features />
      </div>
      <div>
        <Realisation/>    
     </div>
      <div>
          <Footer />
      </div>
    </div>
    );
  }
  
  export default Manageleccsharp;