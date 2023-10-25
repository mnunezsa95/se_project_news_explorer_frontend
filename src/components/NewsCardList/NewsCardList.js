import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import NothingFound from "../NothingFound/NothingFound";

function NewsCardList({ isLoggedIn, searchResults, isPageLoading, isSearching, inSavedNews }) {
  let [cardView, setCardView] = useState(3);
  const handleSearchRes = () => setCardView(cardView + 3);
  //MAYBE reset value useEffect() when search results triggers

  return !isPageLoading && isSearching && searchResults.length === 0 ? (
    <NothingFound />
  ) : !isPageLoading && isSearching && searchResults.length >= 3 ? (
    <section className="newscardlist__section">
      <h2 className="newscardlist__title">Search results</h2>
      <div className="newscardlist__container">
        {searchResults.slice(0, cardView).map((searchRes, index) => (
          <NewsCard key={index} searchRes={searchRes} isLoggedIn={isLoggedIn} inSavedNews={inSavedNews} />
        ))}
      </div>
      <button className="newscardlist__button" type="button" onClick={handleSearchRes}>
        Show more
      </button>
    </section>
  ) : (
    ""
  );
}

export default NewsCardList;
