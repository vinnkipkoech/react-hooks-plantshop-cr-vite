import React from "react";

function Search({ searchQuery, onSearch }) {  // ADD props
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery}                        // ADD
        onChange={(e) => onSearch(e.target.value)} // REPLACE console.log
      />
    </div>
  );
}

export default Search;
