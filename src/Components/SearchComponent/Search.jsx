import React, { useState } from "react";
import "./Search.css";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    alert("Search clicked by : " + searchValue);
  };
  const handleSearchChange = (e) => {
    setSearchValue(e?.target?.value);
  };
  return (
    <div className="SearchComponent">
      <div>
        <SearchIcon />
        <input
          type="text"
          placeholder="Title, location, company..."
          value={searchValue}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e?.keyCode === 13 || e?.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Search;
