import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ isLoggedIn }) {
  return (
    <div className="saved__news-container">
      <NewsCard isLoggedIn={isLoggedIn} />
      <NewsCard isLoggedIn={isLoggedIn} />
      <NewsCard isLoggedIn={isLoggedIn} />
      <NewsCard isLoggedIn={isLoggedIn} />
      <NewsCard isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default SavedNews;
