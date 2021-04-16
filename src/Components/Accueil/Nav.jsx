import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  const [change, setChange] = useState("#ff022c");
  function changeNavColor(e, x) {
    console.log(`Navigate to ${e}`);
    setChange(x);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark   ">
      <div className="container-fluid ">
        <Link to="/">
          <a
            className="navbar-brand fs-2 myM btn shadow-none"
            onClick={() => changeNavColor("Accueil", "#ff022c")}
          >
            <span className=" fw-bold mt-1" style={{ color: change }}>
              A
            </span>
            .M
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <p></p>
          <div className="navbar-nav">
            <Link to="/work">
              <button
                onClick={() => changeNavColor("Work", " #ff022c")}
                className=" btn mx-3 shadow-none"
              >
                Work
              </button>
            </Link>
            <Link to="/about">
              <button
                onClick={() => changeNavColor("About", " #047cec")}
                className=" btn mx-3 shadow-none button2"
              >
                About
              </button>
            </Link>
            <Link to="/contact">
              <button
                onClick={() => changeNavColor("Contact", "#b2ff6b")}
                className=" btn mx-3 shadow-none button3"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
