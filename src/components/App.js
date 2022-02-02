import React from "react";
import Batman from "./Batman";
import Home from "./Home";
import Spiderman from "./Spiderman";
import Superman from "./Superman";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../App.css";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <div className="App">
      <Navbar />

      <ThemeProvider theme={darkTheme}>
        <div id="page-wrap">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/batman" element={<Batman />} />
            <Route exact path="/superman" element={<Superman />} />
            <Route exact path="/spider-man" element={<Spiderman />} />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
