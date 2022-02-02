import React, { useState } from "react";
import { Link } from "react-router-dom";
import { push as Menu } from "react-burger-menu";

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
          <Link to="/" style={{ color: "#f7f7f7" }}>
            {" "}
            <h1>Home</h1>
          </Link>

          <Link to="/batman" style={{ color: "#f7f7f7" }}>
            <h1>Batman</h1>
          </Link>
          <Link to="/superman" style={{ color: "#f7f7f7" }}>
            <h1>Superman</h1>
          </Link>
          <Link to="/spider-man" style={{ color: "#f7f7f7" }}>
            <h1>Spiderman</h1>
          </Link>
        </Menu>
      ) : null}
    </div>
  );
}

export default Navbar;
