import React from "react";
import data from "../heroes";
import Cards from "./Card";
import { CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { closeVideos } from "./features";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";

function createCard() {
  for (var j = 0; j < data.length; j++) {
    var hero = data[j];
  }

  let cardData = [];
  for (var i = 0; i < hero.blackpanther.length; i++) {
    let input = (
      <Cards
        name="blackpanther"
        key={hero.blackpanther[i].id}
        id={hero.blackpanther[i].id}
        actor={hero.blackpanther[i].actor}
        img={hero.blackpanther[i].img}
        movies={hero.blackpanther[i].movies}
        playlist={hero.blackpanther[i].playlistId}
      />
    );
    cardData.push(input);
  }
  return cardData;
}

function Blackpanther() {
  const videos = useSelector((state) => state.load.value);

  return (
    <div>
      <Paper elevation={3} square={true}>
        <h1 className="title">Blackpanther</h1>
      </Paper>
      <CardGroup className="cards">{createCard()}</CardGroup>
      {videos.length !== 0 ? (
        <Dialog open="true">
          {videos}
          <br />
          <Button
            className="closeButton"
            variant="contained"
            onClick={closeVideos}
          >
            Close
          </Button>
        </Dialog>
      ) : null}
    </div>
  );
}
export default Blackpanther;
