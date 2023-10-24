import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Loading from "../Loading/Loading";
import About from "../About/About";
import "./Main.css";

function Main({ isLoggedIn, searchResults, isSearching, isPageLoading, inSavedNews }) {
  return (
    <>
      {isPageLoading === false ? (
        <NewsCardList isLoggedIn={isLoggedIn} searchResults={searchResults} isPageLoading={isPageLoading} isSearching={isSearching} inSavedNews={inSavedNews} />
      ) : (
        <Loading />
      )}
      <About />
    </>
  );
}

export default Main;
