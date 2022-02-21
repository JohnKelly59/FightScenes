import React from "react";
import Characterpage from "./CharacterPage";
import Home from "./Home";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../App.css";

function App() {
  // theme for application using MaterialUI
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  // gets the character chosen from redux store
  const character = useSelector((state) => state.character.value);
  return (
    <div className="App">
      {/* Navigation bar */}
      <Navbar />
      {/* Runs theme from material UI */}
      <ThemeProvider theme={darkTheme}>
        <div id="page-wrap">
          {/*Routes for app  */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path={"/" + character} element={<Characterpage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
