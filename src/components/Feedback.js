import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";

const Feedback = ({ url, paragraph, label, state, onclick }) => {
  // const [state, setState] = useState(true);
  return (
    <>
      <div className="">
        {state ? (
          <div className="feedback flex-column">
            <div className="close" onClick={onclick}>
              <FaTimes />
            </div>
            <img src={url} alt="" />
            <h3>Awesome!</h3>
            <p>{paragraph}</p>
            <Button text={label} onclick={onclick} />
          </div>
        ) : (
          state
        )}

        {state ? <div className="overlay"></div> : state}
      </div>
    </>
  );
};

export default Feedback;
