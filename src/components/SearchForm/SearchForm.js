import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search__form-container">
      <input className="search__form-input" placeholder="Search something ..." />
      <button className="search__form-button" value="Search" name="search" title="Search">
        Search
      </button>
    </div>
  );
}

export default SearchForm;
