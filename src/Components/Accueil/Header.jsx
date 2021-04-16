import React from "react";
import Nav from "./Nav";
import Wave from "./Wave";
import Accueil from "../video/Accueil.mp4";
import Wportfolio from "./Wportfolio";
import Work from "../Work/Work";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Header() {
  return (
    <Router>
      <header className="firstBg">
        <video className="vid1" autoPlay muted loop>
          <source src={Accueil} type="video/mp4" />
        </video>
        <div>
          <Nav />
        </div>
      </header>
      <Switch>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <div className="myMuf">
            <Wportfolio />
            <h2 className="mufasa">
              {" "}
              <span>A</span>khtar Mohammed
            </h2>
            <Wave />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
