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
  // variable to hold target name
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
          key: "AIzaSyAbXM29Qd4ZK9xzAJcCEyBLBjVZ-ez-ICg",
          //get playlist by checking the actor's card button
          playlistId: hero[name][e.target.value].playlistId,
          part: "snippet",
          maxResults: "50",
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
        // create video for each actor link inside heroes json
        <Videos links={"https://www.youtube.com/embed/" + links[i]} key={i} />
      );
      // push videos to empty array
      videoData.push(input);
    }
    console.log(videoData);
    // change videos loaded store in redux to actor's videos/links inside the videoData array
    configureStore.dispatch(videosLoaded(videoData));
    return videoData;
  } catch (error) {
    console.error(error);
  }
}

function closeVideo() {
  // change videosLoaded store to empty array
  configureStore.dispatch(videosLoaded([]));
}

export default getPlaylist;

export const closeVideos = closeVideo;
