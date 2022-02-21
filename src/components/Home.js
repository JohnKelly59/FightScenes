import React from "react";
import { HomeCards } from "./Card";
import data from "../heroes";
import { CardGroup } from "react-bootstrap";
import Paper from "@mui/material/Paper";

function createHomeCard() {
  // add data from json into array
  for (var j = 0; j < data.length; j++) {
    var hero = data[j];
  }
  //empty array to hold home cards that will be added
  let cardData = [];
  for (var i = 0; i < hero.home.length; i++) {
    console.log(Object.values(hero.home[i]));
    let input = (
      // create home card for each charactor in json
      <HomeCards
        key={[i]}
        name={Object.keys(hero.home[i])}
        img={Object.values(hero.home[i])}
      />
    );
    // push all home cards into homeCards array
    cardData.push(input);
  }
  return cardData;
}

function Home() {
  return (
    <div>
      {/* Title */}
      <Paper elevation={3} square={true}>
        <h1 className="title">Heroes</h1>
      </Paper>
      {/* group of cards for characters */}
      <CardGroup className="cards">{createHomeCard()}</CardGroup>;
    </div>
  );
}
export default Home;
