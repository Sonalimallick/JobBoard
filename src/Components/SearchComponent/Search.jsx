import React, { useState } from "react";
import "./Search.css";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { updateSearch } from "../../Redux/JobReducer/JobSlice";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    dispatch(updateSearch(e?.target?.value));
    setSearchValue(e?.target?.value);
  };
  const handleClearSearch = () => {
    setSearchValue("");
    dispatch(updateSearch(""));
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
        />
        {searchValue && (
          <IconButton
            onClick={handleClearSearch}
            className="SearchButton"
            color="error"
          >
            <CloseIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
}

export default Search;
