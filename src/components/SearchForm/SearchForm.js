import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSubmit }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSearchKeywordChange = (evt) => setSearchKeyword(evt.target.value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(searchKeyword);
    setSearchKeyword("");
  };

  return (
    <form className="search__form-container" onSubmit={handleSubmit}>
      <input
        className="search__form-input"
        type="text"
        placeholder="Search something ..."
        minLength={2}
        maxLength={30}
        name="search"
        value={searchKeyword}
        onChange={handleSearchKeywordChange}
      />
      <button className="search__form-button" name="search" title="Search" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
