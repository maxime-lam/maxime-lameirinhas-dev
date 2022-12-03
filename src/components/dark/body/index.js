import React from "react";
import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import StudentCursus from "./student-cursus/index";
import Intern from "./intern/index";
import Work from "./work/index";
import Contact from "./contact/index";




function Body() {
  return (
  <div className="body">
    <section id="about">
      <About />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="studentCursus">
      <StudentCursus />
    </section>
    <section id="intern">
      <Intern />
    </section>
    <section id="work">
      <Work />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
  );
}

export default Body;