import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import { useState } from "react";
import Feedback from "./Feedback";
import { Link } from "react-router-dom";

const Vote = ({ text, currentUser }) => {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState(false);
  const handleClick = function () {
    setState(false);
  };
  return (
    <div className="vote-page">
      <Navbar currentUser={currentUser} />
      <h1>{text}</h1>
      <Search />
      <p>
        You have{" "}
        <span
          style={{
            fontSize: "48px",
            color: "#3E0563",
          }}
        >
          70
        </span>{" "}
        votes left
      </p>
      <p>
        Increase your voting power <Link to="/buy">Here</Link>
      </p>
      <div className="votes">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => {
          return (
            <div className="vote" key={i}>
              <div className="image"></div>
              <p style={{ fontSize: "18px" }}>Adewale Akinola</p>
              <p>750 votes</p>
              <div className="vote-button ">
                <a
                  className="inline"
                  href="#4"
                  onClick={() =>
                    setCounter((prev) => (!prev ? prev : prev - 1))
                  }
                >
                  -
                </a>
                <p className="inline">{counter}</p>
                <a
                  className="inline"
                  href="#4"
                  onClick={() => setCounter((prev) => prev + 1)}
                >
                  +
                </a>
                <div className=" purple" onClick={() => setState(true)}>
                  Vote
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {state ? (
        <Feedback
          url="images\Group.png"
          paragraph="Thank you for taking the time to vote.
We are commited to promoting technology in Africa"
          label="Return to voting page"
          state={state}
          onclick={handleClick}
        />
      ) : (
        state
      )}
    </div>
  );
};

export default Vote;
