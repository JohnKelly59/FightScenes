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
  console.log(videoData);
  const videos = useSelector((state) => state.load.value);

  return (
    <div>
      <h1>Batman</h1>
      <CardGroup>{createCard()}</CardGroup>
      <span className="videos">{videos}</span>
    </div>
  );
}

export default Batman;
