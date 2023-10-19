import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ isLoggedIn }) {
  return (
    <section className="newscardlist__section">
      <h2 className="newscardlist__title">Search results</h2>
      <div className="newscardlist__container">
        <NewsCard isLoggedIn={isLoggedIn} />
        <NewsCard isLoggedIn={isLoggedIn} />
        <NewsCard isLoggedIn={isLoggedIn} />
      </div>
      <button className="newscardlist__button">Show more</button>
    </section>
  );
}

export default NewsCardList;
