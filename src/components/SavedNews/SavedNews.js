import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

//! Will need to add some kind of filter so only "saved" items appear
function SavedNews({ isLoggedIn, searchResults }) {
  return (
    <div className="saved__news-container">
      {searchResults.map((searchRes, index) => {
        return <NewsCard isLoggedIn={isLoggedIn} searchRes={searchRes} key={index} />;
      })}
    </div>
  );
}

export default SavedNews;
