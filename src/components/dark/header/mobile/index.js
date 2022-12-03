import React from "react";
import './mobileDark.css'
import { AiOutlineHome } from "react-icons/ai";


function MobileDark({ isOpen, setIsOpen}) {
  return (
  <div className="mobileDark">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i class="fi-rr-cross-circle"></i>
    </div>
    <div className="mobile-option">
    <a href="/" >
      < AiOutlineHome/>Acceuil
        </a>
    </div>
    <div className="mobile-option">
    <a href="#projects" >
          <i class="fi-rr-edit-alt option-icon"></i>Projets
        </a>
    </div>
    <div className="mobile-option">
        <a href="#skills">
        <i class="fi-rr-laptop option-icon"></i>Compétences
        </a>
    </div>
    <div className="mobile-option">
        <a href="#work">
        <i class="fi-rr-briefcase option-icon"></i>Expérience professionnelle
        </a>
    </div>
    <div className="mobile-option">
        <a href="#studentCursus">
        <i class="fi fi-rr-graduation-cap"></i>Cursus étudiant
        </a>
    </div>
    <div className="mobile-option">
        <a href="#contact">
        <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
  </div>
  );
}

export default MobileDark;