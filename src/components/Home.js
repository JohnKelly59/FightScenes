import React from "react";
import { HomeCards } from "./Card";
import data from "../heroes";
import { CardGroup } from "react-bootstrap";
import Paper from "@mui/material/Paper";

function createHomeCard() {
  for (var j = 0; j < data.length; j++) {
    var hero = data[j];
  }

  let cardData = [];
  for (var i = 0; i < hero.home.length; i++) {
    console.log(Object.values(hero.home[i]));
    let input = (
      <HomeCards
        key={[i]}
        name={Object.keys(hero.home[i])}
        img={Object.values(hero.home[i])}
      />
    );
    cardData.push(input);
  }
  return cardData;
}

function Home() {
  return (
    <div>
      <Paper elevation={3} square={true}>
        <h1 className="title">Heroes</h1>
      </Paper>
      <CardGroup className="cards">{createHomeCard()}</CardGroup>;
    </div>
  );
}
export default Home;
