import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ isLoggedIn, savedNews, saveNewsArticle, removeNewsArticle }) {
  return (
    <div className="saved__news-container">
      {savedNews.map((newsItem, index) => {
        const isSaved = true;
        return (
          <NewsCard
            isLoggedIn={isLoggedIn}
            newsItem={newsItem}
            key={index}
            isSaved={isSaved}
            saveNewsArticle={saveNewsArticle}
            removeNewsArticle={removeNewsArticle}
          />
        );
      })}
    </div>
  );
}

export default SavedNews;
