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
  for (var i = 0; i < hero.hulk.length; i++) {
    let input = (
      <Cards
        name="hulk"
        key={hero.hulk[i].id}
        id={hero.hulk[i].id}
        actor={hero.hulk[i].actor}
        img={hero.hulk[i].img}
        movies={hero.hulk[i].movies}
        playlist={hero.hulk[i].playlistId}
      />
    );
    cardData.push(input);
  }
  return cardData;
}

function Hulk() {
  const videos = useSelector((state) => state.load.value);

  return (
    <div>
      <Paper elevation={3} square={true}>
        <h1 className="title">Hulk</h1>
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
export default Hulk;
