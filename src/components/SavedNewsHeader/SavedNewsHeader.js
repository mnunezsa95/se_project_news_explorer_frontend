import React from "react";
import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";

function SavedNewsHeader({ isLoggedIn, inSavedNews }) {
  return (
    <div className="saved-news-header__container">
      <Navigation isLoggedIn={isLoggedIn} inSavedNews={inSavedNews} />
      <div className="saved-news-header__info-container">
        <p className="saved-news-header__title">Saved articles</p>
        <h2 className="saved-news-header__news-counter">Elise, you have 5 saved articles</h2>
        <p className="saved-news-header__news-keywords">
          By keywords: <b>Nature, Yellowstone, and 2 other</b>
        </p>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
