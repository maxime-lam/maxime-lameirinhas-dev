import React from "react";
import "./studeCard.css"
import { Card } from "react-bootstrap";

function StudeCard({ stude }) {
  return (
   <div className="stude-card">
      <Card  style={{ width: '18rem' }} >
        <Card.Body className="CardBody">
          <Card.Title>
            {stude.name}
          </Card.Title>
          <Card.Text>
            <p>
              date : {stude.date}
            </p>
            <h6>
              {stude.realisation}
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
   </div>
  );
} 
export default StudeCard;