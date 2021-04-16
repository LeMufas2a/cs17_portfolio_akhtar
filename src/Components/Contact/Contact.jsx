import React from "react";
import ContactMe from "./C_Me";
import Formulaire from "./Formulaire";
import Info from "./Info";

export default function Contact() {
  return (
    <section className="container mainContact text-danger">
      <div className="text-center leMufas">
        <ContactMe />
      </div>
      <div className="row myLast">
        <div className="col-6 lastDiv">
          <Info />
        </div>
        <div className="col-6 lasTDiv">
          <Formulaire />
        </div>
      </div>
      <div></div>
    </section>
  );
}
