import React, { useState } from "react";
import { Link } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import data from "../heroes";
import configureStore from "./store";
import { characterChosen } from "./characterSlice";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  // state to hold the option to open and close nav bar
  const [onOpen, setOnOpen] = useState(false);
  //changes navbar to open or close
  const open = () => {
    setOnOpen(!onOpen);
  };
  //empty array to hold hero names for list
  var heroNames = [];
  //puts heroes json data into array
  for (var j = 0; j < data.length; j++) {
    var hero = data[j];
  }
  //get keys of each object in home array found in heroes json
  for (var i = 0; i < hero["home"].length; i++) {
    heroNames.push(Object.keys(hero["home"][i]));
  }

  console.log(heroNames);
  return (
    <div>
      {/* checks if sidebar is open or close */}
      {open ? (
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <List
            sx={{ width: "100", bgcolor: "background.paper", borderRadius: 1 }}
            component="nav"
            aria-label="mailbox folders"
          >
            {/* Home button link*/}
            <ListItem button>
              <Link to="/">
                <h1>Home</h1>
              </Link>
            </ListItem>
          </List>
          <br />
          <List
            sx={{ width: "100", bgcolor: "background.paper", borderRadius: 1 }}
            component="nav"
            aria-label="mailbox folders"
          >
            {heroNames.map((item) => {
              //mapr through hero names to display each character name and creat a route for each
              return (
                <div>
                  <ListItem key={item[0]}>
                    <Link
                      to={"/" + item[0].toLowerCase().replace(" ", "")}
                      style={{ color: "#121212" }}
                      onClick={() =>
                        //adds character name to redux store characterSlice
                        configureStore.dispatch(
                          characterChosen(
                            item[0].toLowerCase().replace(" ", "")
                          )
                        )
                      }
                    >
                      {/* character name */}
                      <h1>{item}</h1>
                    </Link>
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          </List>
        </Menu>
      ) : null}
    </div>
  );
}

export default Navbar;
