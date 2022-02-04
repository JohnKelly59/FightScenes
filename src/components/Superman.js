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
  console.log(hero.superman.actor);
  let cardData = [];
  for (var i = 0; i < hero.superman.length; i++) {
    let input = (
      <Cards
        name="superman"
        key={hero.superman[i].id}
        id={hero.batman[i].id}
        actor={hero.superman[i].actor}
        img={hero.superman[i].img}
        movies={hero.superman[i].movies}
        playlist={hero.superman[i].playlistId}
      />
    );
    cardData.push(input);
  }
  return cardData;
}

function Superman() {
  const videos = useSelector((state) => state.load.value);

  return (
    <div>
      <Paper elevation={3} square={true}>
        <h1 className="title">Superman</h1>
      </Paper>
      <CardGroup classname="cards">{createCard()}</CardGroup>
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
export default Superman;
