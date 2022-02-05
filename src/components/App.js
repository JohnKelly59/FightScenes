import React from "react";
import Batman from "./Batman";
import Home from "./Home";
import Spiderman from "./Spiderman";
import Superman from "./Superman";
import Aquaman from "./Aquaman";
import BlackPanther from "./BlackPanther";
import CaptainAmerica from "./CaptainAmerica";
import GreenLantern from "./GreenLantern";
import Hulk from "./Hulk";
import Shazam from "./Shazam";
import WonderWoman from "./WonderWoman";
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
            <Route exact path="/aquaman" element={<Aquaman />} />
            <Route exact path="/batman" element={<Batman />} />
            <Route exact path="/black-panther" element={<BlackPanther />} />
            <Route exact path="/captain-america" element={<CaptainAmerica />} />
            <Route exact path="/green-lantern" element={<GreenLantern />} />
            <Route exact path="/hulk" element={<Hulk />} />
            <Route exact path="/spider-man" element={<Spiderman />} />
            <Route exact path="/superman" element={<Superman />} />
            <Route exact path="/shazam" element={<Shazam />} />
            <Route exact path="/wonder-woman" element={<WonderWoman />} />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
