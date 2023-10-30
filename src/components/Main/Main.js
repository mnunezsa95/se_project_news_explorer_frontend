import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Loading from "../Loading/Loading";
import About from "../About/About";
import "./Main.css";

function Main({ isLoggedIn, searchResults, isSearching, isPageLoading, savedNews, saveNewsArticle, removeNewsArticle }) {
  return (
    <>
      {isPageLoading === false ? (
        <NewsCardList
          isLoggedIn={isLoggedIn}
          searchResults={searchResults}
          isPageLoading={isPageLoading}
          isSearching={isSearching}
          savedNews={savedNews}
          saveNewsArticle={saveNewsArticle}
          removeNewsArticle={removeNewsArticle}
        />
      ) : (
        <Loading />
      )}
      <About />
    </>
  );
}

export default Main;
