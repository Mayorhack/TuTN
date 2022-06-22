import React from "react";

const Search = () => {
  return (
    <div className="searchbar">
      <input
        type="search"
        name="search"
        id=""
        placeholder=" &#128269; Nominee's Name, Nominee's Category"
      />
      <button>Search</button>
    </div>
  );
};

export default Search;
