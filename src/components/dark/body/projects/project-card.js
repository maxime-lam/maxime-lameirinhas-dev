import React from "react";
import { Card } from "react-bootstrap";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <Card  style={{ width: '18rem' }}>   
        <Card.Img className="img" variant="top" src={project.image} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.about}</Card.Text>
          <div className="project-tags">
            {project.tags.map((tag)=> {
              return <label className="tag">{tag}</label>;
            })}
        </div>
        <div className="linkDiv">
          <Card.Link className="link" href={project.src} >aller au projet</Card.Link>
        </div>
        </Card.Body>
      </Card>
    </div>

  );
} 

export default ProjectCard;


/*
    Ancien model de carte de projet



    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag)=> {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <a href={project.src}><img src={project.image} className="project-photo" /></a>
    </div>
*/