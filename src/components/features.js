import data from "../heroes";
import configureStore from "./store";
import axios from "axios";
import Videos from "./Videos";
import { videosLoaded } from "./loadVideos";

async function getPlaylist(e, videoData) {
  videoData = [];
  if (e === undefined) {
    return 0;
  }
  //turns heroes.json(data) into hero array
  for (var j = 0; j < data.length; j++) {
    var hero = data[j];
  }
  //get value of button that was pressed
  console.log(e.target.value);
  let name = e.target.name;
  console.log(hero[name][e.target.value]);
  try {
    // response is that data that is returned from the GET request
    const response = await axios.get(
      //API Base URL
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        //Parameters
        params: {
          key: process.env.REACT_APP_YouTube,
          //get playlist by checking the actor's card button
          playlistId: hero[name][e.target.value].playlistId,
          part: "snippet",
        },
      }
    );
    // array to put response data into.
    var links = [];
    //push response data into links array
    for (let i = 0; i < response.data.items.length; i++) {
      //places videoIds into links array
      links.push(response.data.items[i].snippet.resourceId.videoId);
    }
    //creates individual videos
    for (var i = 0; i < links.length; i++) {
      let input = (
        <Videos links={"https://www.youtube.com/embed/" + links[i]} key={i} />
      );
      videoData.push(input);
    }
    console.log(videoData);
    configureStore.dispatch(videosLoaded(videoData));
    return videoData;
  } catch (error) {
    console.error(error);
  }
}

export default getPlaylist;
