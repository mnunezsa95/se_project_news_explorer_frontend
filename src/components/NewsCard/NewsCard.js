import React, { useState } from "react";
import { formatSearchResDate } from "../../utils/constants";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";

function NewsCard({ isLoggedIn, searchRes, saveNewsArticle, isSaved }) {
  const [showIcon, setShowIcon] = useState(false);
  const location = useLocation().pathname;
  const handleShowIcon = () => setShowIcon(true);
  const handleHideIcon = () => setShowIcon(false);
  const formattedDate = formatSearchResDate(searchRes.publishedAt);

  //! Will need to change location === "/saved-news" to some kind of state once save logic is implemented
  const handleSaveClick = () => saveNewsArticle(searchRes);
  console.log(isSaved);

  return (
    <div className="newscard__container">
      {isLoggedIn && location === "/saved-news" ? <div className="newscard__keyword-section">Yellowstone</div> : ""}
      <div className="newscard__bookmark-section">
        {isLoggedIn && location === "/saved-news" && showIcon ? (
          <p className="newscard__bookmark-additional">Remove from saved</p>
        ) : !isLoggedIn && location === "/" && showIcon ? (
          <p className="newscard__bookmark-additional">Sign in to save articles</p>
        ) : (
          ""
        )}
        {isLoggedIn && location === "/saved-news" ? (
          <button className="newscard__delete-button" onMouseOver={handleShowIcon} onMouseOut={handleHideIcon}></button>
        ) : (
          <button className="newscard__bookmark-button" onMouseOver={handleShowIcon} onMouseOut={handleHideIcon} onClick={handleSaveClick}></button>
        )}
      </div>
      <img className="newscard__image" src={searchRes.urlToImage || searchRes.image} alt={searchRes.description} />
      <div className="newscard__info-container">
        <p className="newscard__info-date">{formattedDate}</p>
        <h3 className="newscard__info-title">{searchRes.title}</h3>
        <p className="newscard__info-text">{searchRes.description || searchRes.text}</p>
        <p className="newscard__info-publisher">{searchRes.source.name || searchRes.name}</p>
      </div>
    </div>
  );
}

export default NewsCard;
