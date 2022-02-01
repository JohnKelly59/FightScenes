import React from "react";
import data from "../heroes";
import Cards from "./Card";
import { CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

//array to hold video data
var videoData = [];

function createCard() {
  for (var j = 0; j < data.length; j++) {
    var hero = data[j];
  }

  let cardData = [];
  for (var i = 0; i < hero.spiderman.length; i++) {
    let input = (
      <Cards
        name="spiderman"
        key={hero.spiderman[i].id}
        id={hero.batman[i].id}
        actor={hero.spiderman[i].actor}
        img={hero.spiderman[i].img}
        movies={hero.spiderman[i].movies}
        playlist={hero.spiderman[i].playlistId}
      />
    );
    cardData.push(input);
  }
  return cardData;
}

function Spiderman() {
  console.log(videoData);
  const videos = useSelector((state) => state.load.value);

  return (
    <div>
      <h1>Spiderman</h1>
      <CardGroup>{createCard()}</CardGroup>
      <span className="videos">{videos}</span>
    </div>
  );
}
export default Spiderman;
