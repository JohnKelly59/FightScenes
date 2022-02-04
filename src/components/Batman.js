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
  for (var i = 0; i < hero.batman.length; i++) {
    let input = (
      <Cards
        name="batman"
        key={hero.batman[i].id}
        id={hero.batman[i].id}
        actor={hero.batman[i].actor}
        img={hero.batman[i].img}
        movies={hero.batman[i].movies}
        playlist={hero.batman[i].playlistId}
      />
    );
    cardData.push(input);
  }
  return cardData;
}

function Batman() {
  const videos = useSelector((state) => state.load.value);

  return (
    <div>
      <Paper elevation={3} square={true}>
        <h1 className="title">Batman</h1>
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

export default Batman;
