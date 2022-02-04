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
              <Link to="/batman" style={{ color: "#121212" }}>
                <h1>Batman</h1>
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
              <Link to="/spider-man" style={{ color: "#121212" }}>
                <h1>Spiderman</h1>
              </Link>
            </ListItem>
          </List>
        </Menu>
      ) : null}
    </div>
  );
}

export default Navbar;
