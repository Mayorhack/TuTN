import React from "react";
import Navbar from "./Navbar";

const Past = () => {
  return (
    <div className="past">
      <Navbar />
      <h1 className="header">Celebrated Techies</h1>
      <p>A look into some of our past winners</p>
      <div className="editions flex">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => {
          return (
            <div className="edition flex-column">
              <img
                src="/images/Frame 72.png"
                alt=""
                style={{ height: "190px", width: "190px" }}
              />
              <h4>South African Edition</h4>
              <p style={{ color: "#3E0563" }}>Exceptional Visual Designer</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Past;
