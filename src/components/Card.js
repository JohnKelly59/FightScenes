import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import getPlaylist from "./features";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import configureStore from "./store";
import { characterChosen } from "./characterSlice";

function Cards(props) {
  return (
    <div>
      {/* cards for character routes */}
      <Card sx={{ maxWidth: 345 }} className="card">
        {/* card picture */}
        <CardMedia
          component="img"
          height="286"
          width=""
          image={props.img}
          alt="image"
        />
        <CardContent>
          {/* Actor name */}
          <Typography
            className="secondaryCard"
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.actor}
          </Typography>
          {/* Movies  */}
          <Typography variant="body2" color="text.secondary">
            {props.movies}
          </Typography>
        </CardContent>
        <CardActions>
          {/* open videos button */}
          <Button
            size="small"
            name={props.name}
            value={props.id}
            onClick={getPlaylist}
            variant="contained"
          >
            Videos
          </Button>
        </CardActions>
      </Card>

      <br />
    </div>
  );
}

function homeCards(props) {
  // hero name
  let heroName = props.name[0];
  console.log(heroName);
  //hero name without spaces
  let linkName = heroName.replace(" ", "");
  return (
    <div>
      {/* cards for home */}
      {/* link to go to character page */}
      <Link to={"/" + linkName}>
        <Card
          sx={{ maxWidth: 345 }}
          className="card"
          onClick={() =>
            // change character name in redux store
            configureStore.dispatch(characterChosen(linkName.toLowerCase()))
          }
        >
          <CardActionArea>
            {/* charater picture */}
            <CardMedia
              component="img"
              height="286"
              image={props.img}
              alt="green iguana"
            />
            <CardContent>
              {/* character name */}
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                className="secondaryCard"
              >
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}

export default Cards;

export const HomeCards = homeCards;
