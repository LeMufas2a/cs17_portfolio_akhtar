import React, { useState } from "react";
import CardWork from "../Work/CardWork";

export default function Work() {
  const [projet] = useState([
    {
      nom: "EmporiumJS",
      number: "01",
      description: "test",
      img: "../img/Emporium_img.png",
      link: "https://github.com/LeMufas2a/ProjetEmporiumJS",
    },
    {
      nom: "Flappy Bird",
      number: "02",
      description: "test",
      img: "../img/flappy-bird.gif",
      link: "https://github.com/LeMufas2a/Flappy_Bird",
    },
    {
      nom: "Site du chef",
      number: "03",
      description: "test",
      img: "../img/sdf.JPG",
      link: "https://github.com/LeMufas2a/Site_du_chef",
    },
  ]);

  return (
    <div className="container myProject">
      <div className="row mySi">
        {projet.map((e, i) => {
          return <CardWork key={i} project={e} />;
        })}
      </div>
    </div>
  );
}
