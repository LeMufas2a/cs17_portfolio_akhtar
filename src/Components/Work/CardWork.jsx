import React from "react";
import Tilt from "react-vanilla-tilt";

export default function CardWork({ project }) {
  return (
    <div className="col-4 carte myCol mx-3 text-center ">
      <div>
        <h1>{project.number}</h1>
        <h2>{project.nom}</h2>
        <div></div>
      </div>
      <div>
        <button
          type="button"
          className="btn shadow-none mt-3"
          data-bs-toggle="modal"
          data-bs-target={"#modal-" + project.nom.replaceAll(" ", "")}
        >
          Show
        </button>
        <div>
          <a href={project.link} target="_blank">
            <button className="btn shadow-none mt-3 w-100">
              Go To Project
            </button>
          </a>
        </div>

        <div
          className="modal fade"
          id={"modal-" + project.nom.replaceAll(" ", "")}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          >
          <div className="modal-dialog">
            <div className="modal-content">
          <Tilt style = {{width : '100%'}}>
              <div className="modal-header">
                <h5 className="modal-title text-dark" id="exampleModalLabel">
                  {project.nom}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
                <div className="modal-body">
                  <img src={project.img} className="img-fluid w-100" alt="" />
              </div>
                </Tilt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
