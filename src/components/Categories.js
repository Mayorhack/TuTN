import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import { Link } from "react-router-dom";

const Stack = ({ text, onclick }) => {
  return (
    <>
      <div className="stack" onClick={() => onclick(text)}>
        <Link to="/vote">
          <img src="images\Frame 32.png" alt="" />
          <h3>{text}</h3>
          <p>&rarr;</p>
        </Link>
      </div>
    </>
  );
};

const Categories = ({ onclick, currentUser }) => {
  const stack = [
    "Exceptional Data Analyst",
    "Promising Data Analyst",
    "Exceptional Data Scientist",
    "Promising Data Scientist",
    "Exceptional Visual Designer",
    "Promising Visual Designer",
    "Exceptional DevOps Expert",
    "Exceptional Data Analyst",
  ];
  return (
    <div className="categories">
      <Navbar currentUser={currentUser} />
      <h1>Voting Categories</h1>
      <Search />
      <div className="stacks">
        {stack.map((stac, i) => (
          <Stack text={stac} key={i} onclick={onclick} />
        ))}
        {stack.map((stac, i) => (
          <Stack text={stac} key={i} onclick={onclick} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
