import React from "react";

export default function Formulaire() {
  return (
    <div className="myInfo text-center  mx-auto w-100">
      <div className="w-100">
        <input className="m-3" type="text" placeholder="Name" />
        <input className="m-3" type="text" placeholder="Mail" />
        <input className="m-3" type="text" placeholder="Phone Number" />
        <input className="m-3" type="text" placeholder="Adress" />
        <input className="m-3" type="datetime-local" />
      </div>
      <div className="w-100">
        <input type="text" className="m-3 w-75 myInp" />
        <input type="file" className="m-3 lastInp" />
      </div>
    </div>
  );
}
