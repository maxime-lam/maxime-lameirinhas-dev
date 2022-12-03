import React, { useState } from "react";
import "./headerDark.css";
import MobileDark from "./mobile";


function Header() {
  const [isOpen, setIsOpen]=useState(false);
  return (
    <div className="headerDark">
      <div className="logo">Maxime Lameirinhas Portfolio</div>
      <div className="menu">
        <div className="mobile-menu">
          <div onClick={()=>setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <MobileDark isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;