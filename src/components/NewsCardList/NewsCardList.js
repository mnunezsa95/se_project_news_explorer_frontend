import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import NothingFound from "../NothingFound/NothingFound";

function NewsCardList({ isLoggedIn, searchResults, isPageLoading, isSearching, inSavedNews }) {
  // initial state with value of 3
  // slice() method for arrays on searchResults from (0, 3)
  // click event handler add 3
  // reset value useEffect() when search results triggers

  return !isPageLoading && isSearching && searchResults.length === 0 ? (
    <NothingFound />
  ) : !isPageLoading && isSearching && searchResults.length >= 0 ? (
    <section className="newscardlist__section">
      <h2 className="newscardlist__title">Search results</h2>
      <div className="newscardlist__container">
        {searchResults.map((searchRes, index) => (
          <NewsCard key={index} searchRes={searchRes} isLoggedIn={isLoggedIn} inSavedNews={inSavedNews} />
        ))}
      </div>
      <button className="newscardlist__button">Show more</button>
    </section>
  ) : (
    ""
  );
}

export default NewsCardList;
