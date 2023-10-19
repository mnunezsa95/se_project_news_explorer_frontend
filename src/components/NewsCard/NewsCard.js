import React, { useState } from "react";
import "./NewsCard.css";
import test_image from "../../images/test_image.jpg";

function NewsCard({ isLoggedIn }) {
  const [showIcon, setShowIcon] = useState(false);
  const handleShowIcon = () => setShowIcon(true);
  const handleHideIcon = () => setShowIcon(false);

  return (
    <div className="newscard__container">
      {isLoggedIn ? <div className="newscard__keyword-section">Yellowstone</div> : ""}
      <div className="newscard__bookmark-section">
        {isLoggedIn
          ? showIcon && <p className="newscard__bookmark-additional">Remove from saved</p>
          : showIcon && <p className="newscard__bookmark-additional">Sign in to save articles</p>}
        {isLoggedIn ? (
          <button className="newscard__delete-button" onMouseOver={handleShowIcon} onMouseOut={handleHideIcon}></button>
        ) : (
          <button className="newscard__bookmark-button" onMouseOver={handleShowIcon} onMouseOut={handleHideIcon}></button>
        )}
      </div>
      <img className="newscard__image" src={test_image} alt="news article " />
      <div className="newscard__info-container">
        <p className="newscard__info-date">November 4, 2020</p>
        <h3 className="newscard__info-title">Everyone Needs a Special 'Sit Spot' in Nature</h3>
        <p className="newscard__info-text">
          Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice,
          which Louv attributes to nature educator Jon Young, is for both adults and children to find...
        </p>
        <p className="newscard__info-publisher">National Geographic</p>
      </div>
    </div>
  );
}

export default NewsCard;
