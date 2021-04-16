import React from "react";
import Identity from "./Identity";
import IdTyping from "../About/IdTyping";

export default function About() {
  return (
    <div className="container text-center mt-5 pt-5 position-relative myMov">
      <IdTyping />
      <Identity />
      <h2 className="pt-5 mt-5 mycolor">
        Welcome, My name is Akhtar Mohammed is only 19 years old I have just
        entered the world of IT hears that a full stack web developer
      </h2>
    </div>
  );
}
