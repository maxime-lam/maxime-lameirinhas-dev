import React from "react";
import { Card } from "react-bootstrap";
import "./intern-card.css";


function InternCard ({ item }) {
  return (
    <div className="internCard">
      <Card  style={{ width: '18rem' }}>   
      <Card.Img className="img" variant="top" src={item.companyLogo} />
      <Card.Body>
        <Card.Title className="title">{item.designation}</Card.Title>
        <Card.Text>mission: {item.work}</Card.Text>
        <Card.Footer className="date">date: {item.dateJoining} au {item.dateEnd}</Card.Footer>
      <div className="linkDiv">
        <Card.Link className="link" href="/" >voir le rapport de stage</Card.Link>
      </div>
      </Card.Body>
    </Card>
  </div>
  );
}
export default InternCard;