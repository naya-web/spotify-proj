import React from "react";
import './SearchBoxStyle.css'
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  return (
    <>
      <div className="search-box">
        <i><FaSearch /></i>
        <input type="search" placeholder="Search" />
      </div>
    </>
  );
}

export default SearchBox;
