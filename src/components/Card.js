import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import getPlaylist from "./features";

function Cards(props) {
  return (
    <div>
      <Card style={{ width: "25rem" }} bg="warning" className="card">
        <Card.Img variant="top" src={props.img} height="286" weight="180" />
        <Card.Body>
          <h5>{props.actor}</h5>
          <Card.Text>{props.movies}</Card.Text>
          <Button
            variant="danger"
            name={props.name}
            value={props.id}
            onClick={getPlaylist}
          >
            Videos
          </Button>
        </Card.Body>
      </Card>

      <br />
    </div>
  );
}

export default Cards;
