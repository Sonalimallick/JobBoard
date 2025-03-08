import React, { useState } from "react";
import "./Search.css";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, colors } from "@mui/material";

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
      <div className="SearchInputContainer">
        <SearchIcon />
        <input
          className="SearchInput"
          type="text"
          placeholder="Title, location, company..."
          value={searchValue}
          onChange={handleSearchChange}
          onKeyDown={(e) =>(e?.keyCode === 13 || e?.key === "Enter") && handleSearch()}
        />
        <Button variant="contained" onClick={handleSearch} className="SearchButton">Search</Button>
      </div>
    </div>
  );
}

export default Search;
