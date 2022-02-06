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

function Cards(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
          component="img"
          height="286"
          width=""
          image={props.img}
          alt="image"
        />
        <CardContent>
          <Typography
            className="secondaryCard"
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.actor}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.movies}
          </Typography>
        </CardContent>
        <CardActions>
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
  let heroName = props.name[0];
  console.log(heroName);
  let linkName = heroName.replace(" ", "-");
  return (
    <div>
      <Link to={"/" + linkName}>
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="286"
              image={props.img}
              alt="green iguana"
            />
            <CardContent>
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
