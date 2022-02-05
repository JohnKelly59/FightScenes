import React, { useState } from "react";
import { Link } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  const [onOpen, setOnOpen] = useState(false);

  const open = () => {
    setOnOpen(!onOpen);
  };

  return (
    <div>
      {open ? (
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <List
            sx={{ width: "100", bgcolor: "background.paper", borderRadius: 1 }}
            component="nav"
            aria-label="mailbox folders"
          >
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
            <ListItem>
              <Link to="/aquaman" style={{ color: "#121212" }}>
                <h1>Aquaman</h1>
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/batman" style={{ color: "#121212" }}>
                <h1>Batman</h1>
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/black-panther" style={{ color: "#121212" }}>
                <h1>Black Panther</h1>
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/captain-america" style={{ color: "#121212" }}>
                <h1>Captain America</h1>
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/green-lantern" style={{ color: "#121212" }}>
                <h1>Green Lantern</h1>
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/hulk" style={{ color: "#121212" }}>
                <h1>Hulk</h1>
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/spider-man" style={{ color: "#121212" }}>
                <h1>Spiderman</h1>
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/superman" style={{ color: "#121212" }}>
                <h1>Superman</h1>
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/shazam" style={{ color: "#121212" }}>
                <h1>Shazam</h1>
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/wonder-woman" style={{ color: "#121212" }}>
                <h1>Wonder Woman</h1>
              </Link>
            </ListItem>
          </List>
        </Menu>
      ) : null}
    </div>
  );
}

export default Navbar;
