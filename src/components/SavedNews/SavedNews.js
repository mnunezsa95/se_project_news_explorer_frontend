import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

//! Will need to add some kind of filter so only "saved" items appear
function SavedNews({ isLoggedIn, isSearching, searchResults, isPageLoading }) {
  return (
    <div className="saved__news-container">
      {searchResults.map((searchRes) => {
        return <NewsCard isLoggedIn={isLoggedIn} isSearching={isSearching} searchRes={searchRes} isPageLoading={isPageLoading} />;
      })}
    </div>
  );
}

export default SavedNews;
