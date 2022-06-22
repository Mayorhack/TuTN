import React, { useState } from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import Feedback from "./Feedback";

const Buy = () => {
  const [state, setState] = useState(false);
  const handleClick = function () {
    setState(false);
  };
  const buttonClick = () => setState(true);
  return (
    <>
      <Navbar />
      <div className="buy">
        <div className="tab">
          <h1>Increase Your Voting Power</h1>
          <p>Cheer Your Favourite Nominee to Success</p>
          <div className="powers">
            {[20, 45, 70, 100].map((item, i) => {
              return (
                <div className="power" style={{ height: `${60 * (i + 5)}px` }}>
                  <div>
                    <h1>{item}</h1>
                    <p>Votes</p>
                  </div>
                  <div className="">
                    <h2>${item / 10 + 0.5}</h2>
                    <Button text="Buy" onclick={buttonClick} />
                  </div>
                  <img src="images/Frame 48.png" alt="" id="two" />
                  <img src="images/Group 4.png" alt="" id="one" />
                </div>
              );
            })}
          </div>
        </div>
        {state ? (
          <Feedback
            url="images\rocket-svgrepo-com (1) 1.png"
            paragraph="You have successfully Increased your voting power.
          Go and make your favorite candidate win!"
            label="Go to voting page"
            state={state}
            onclick={handleClick}
          />
        ) : (
          state
        )}
      </div>
    </>
  );
};

export default Buy;
