import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';

import "./style.css";

const Search = props => {
  const [val, setVal] = useState("");
  
  const donehandler = event =>{
    event.preventDefault();
    
    props.searchHandler(val);
  }

  return (
    <div className="search">
      <form onSubmit={donehandler} className="search__form">
        <input
          className="search__form--input"
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button type="submit" className="search__form--button">
        <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
