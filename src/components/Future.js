import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";

const Future = () => {
  return (
    <div className="future">
      <Navbar />
      <h1 className="header">Future Editions</h1>
      <p>Nominate candidates for future editions</p>
      <div className="editions flex">
        {[1, 2, 3, 4].map((_, i) => {
          return (
            <div className="edition ">
              <img src="images/Frame 32 (1).png" alt="" />
              <p>South African Edition</p>
              <Button text={"Nominate"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Future;
