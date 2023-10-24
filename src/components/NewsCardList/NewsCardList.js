import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import NothingFound from "../NothingFound/NothingFound";

function NewsCardList({ isLoggedIn, searchResults, isPageLoading, isSearching }) {
  return !isPageLoading && isSearching && searchResults.length === 0 ? (
    <NothingFound />
  ) : !isPageLoading && isSearching && searchResults.length >= 0 ? (
    <section className="newscardlist__section">
      <h2 className="newscardlist__title">Search results</h2>
      <div className="newscardlist__container">
        {searchResults.map((searchRes) => (
          <NewsCard searchRes={searchRes} key={searchRes?.id ?? searchRes?._id} isLoggedIn={isLoggedIn} />
        ))}
      </div>
      <button className="newscardlist__button">Show more</button>
    </section>
  ) : (
    ""
  );
}

export default NewsCardList;
