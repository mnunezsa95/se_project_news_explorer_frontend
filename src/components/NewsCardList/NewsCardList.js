import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  return (
    <section className="newscardlist-section">
      <h2 className="newscardlist__title">Search results</h2>
      <div className="newscardlist__container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
}

export default NewsCardList;
