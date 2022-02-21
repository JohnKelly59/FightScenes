import React from "react";
import data from "../heroes";
import Cards from "./Card";
import { CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { closeVideos } from "./features";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";

function Characterpage() {
  //state to show tell to show videos page or not. redux "True or false"
  const videos = useSelector((state) => state.load.value);
  // state that holds character chosen redux
  const character = useSelector((state) => state.character.value);
  console.log(character);

  //create card for each actor
  function createCard() {
    // change heroes data to hero array
    for (var j = 0; j < data.length; j++) {
      var hero = data[j];
    }
    // empty array to hold card data
    let cardData = [];

    for (var i = 0; i < hero[character].length; i++) {
      let input = (
        // crate card and add data from heroes as props for the card
        <Cards
          name={character}
          key={hero[character][i].id}
          id={hero[character][i].id}
          actor={hero[character][i].actor}
          img={hero[character][i].img}
          movies={hero[character][i].movies}
          playlist={hero[character][i].playlistId}
        />
      );
      // push created card into card data
      cardData.push(input);
    }
    return cardData;
  }

  return (
    <div>
      {/* Display character name */}
      <Paper elevation={3} square={true}>
        <h1 className="title">{character}</h1>
      </Paper>

      {/* create card for each actor */}
      <CardGroup className="cards">{createCard()}</CardGroup>

      {videos.length !== 0 ? (
        // if there are vidros, show videos
        <Dialog open="true">
          {videos}
          <br />
          {/* button to close videos box */}
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

export default Characterpage;
