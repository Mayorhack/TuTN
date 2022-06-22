import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-header">
        <h1>The Connected Awards </h1>
        <p>Learn about us</p>
        <img src="images\WhatsApp Image 2022-02-10 at 10.38 4.png" alt="" />
      </div>
      <div className="about-flex">
        <div className="techies-details">
          <h2>Connecting Techies Globally</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <img src="images\WhatsApp Image 2022-02-10 at 10.38 2.png" alt="" />
      </div>
    </div>
  );
};

export default About;
