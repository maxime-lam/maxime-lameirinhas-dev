import React from "react";
import "./contact.css";
import Separator from "../../../common/separator";

function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>Prenez contact avec moi</p>
        <br/>
        <br/>
        <p>maximelameirinhaspro@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;