import React, { useState } from "react";
import { formatSearchResDate } from "../../utils/constants";
import { useLocation } from "react-router-dom";
import noUrlImage from "../../images/no-url-image.jpeg";
import "./NewsCard.css";

function NewsCard({ isLoggedIn, newsItem, isSaved, handleSaveArticle, handleRemoveArticle }) {
  const formattedDate = formatSearchResDate(newsItem.publishedAt);
  const [showIcon, setShowIcon] = useState(false);
  const location = useLocation().pathname;
  const handleShowIcon = () => setShowIcon(true);
  const handleHideIcon = () => setShowIcon(false);
  const handleSaveClick = () => (isSaved ? handleRemoveArticle(newsItem) : handleSaveArticle(newsItem, newsItem.keyword));

  return (
    <article className="newscard__container">
      {isLoggedIn && location === "/saved-news" ? <div className="newscard__keyword-section">{newsItem.keyword}</div> : ""}
      <div className="newscard__bookmark-section">
        {!isLoggedIn && !isSaved && showIcon ? (
          <p className="newscard__bookmark-additional">Sign in to save articles</p>
        ) : (isSaved && isLoggedIn && showIcon) || (location === "/saved-news" && showIcon) ? (
          <p className="newscard__bookmark-additional">Remove from saved</p>
        ) : (
          ""
        )}
        {isLoggedIn && location === "/saved-news" ? (
          <button className="newscard__delete-button" onMouseOver={handleShowIcon} onMouseOut={handleHideIcon}></button>
        ) : (
          <button
            className={isSaved ? "newscard__bookmark-button-active" : "newscard__bookmark-button"}
            onMouseOver={handleShowIcon}
            onMouseOut={handleHideIcon}
            onClick={handleSaveClick}
            disabled={!isLoggedIn}
          ></button>
        )}
      </div>
      <img className="newscard__image" src={newsItem.urlToImage || newsItem.image || noUrlImage} alt={newsItem.description} />
      <div className="newscard__info-container">
        <p className="newscard__info-date">{formattedDate}</p>
        <h3 className="newscard__info-title">{newsItem.title}</h3>
        <p className="newscard__info-text">{newsItem.description || newsItem.text}</p>
        <p className="newscard__info-publisher">{newsItem.source.name || newsItem.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
