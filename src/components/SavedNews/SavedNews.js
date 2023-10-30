import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

//! Will need to add some kind of filter so only "saved" items appear
function SavedNews({ isLoggedIn, savedNews }) {
  return (
    <div className="saved__news-container">
      {savedNews.map((newsItem, index) => {
        return <NewsCard isLoggedIn={isLoggedIn} newsItem={newsItem} key={index} />;
      })}
    </div>
  );
}

export default SavedNews;
