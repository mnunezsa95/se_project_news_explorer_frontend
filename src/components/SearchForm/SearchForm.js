import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSubmit }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearchValid, setIsSearchValid] = useState(true);
  const [validationError, setValidationError] = useState("");

  const handleSearchKeywordChange = (evt) => setSearchKeyword(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (searchKeyword === "") {
      setIsSearchValid(false);
      setValidationError("Please enter a keyword");
    } else {
      setIsSearchValid(true);
      onSubmit(searchKeyword);
    }
    setSearchKeyword("");
  };

  return (
    <div className="search__form">
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
      <span className={isSearchValid ? "search__form-error-inactive" : "search__form-error"}>{validationError}</span>
    </div>
  );
}

export default SearchForm;
