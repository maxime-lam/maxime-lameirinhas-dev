import React from "react";
import "./pagenotfound.css";
import Header from "../header/index";
import Body from "./body/index";
import Footer from "../footer/index";


function PageNotFound() {
    return ( 
    <div className="pagenotfound">
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
  
  export default PageNotFound;