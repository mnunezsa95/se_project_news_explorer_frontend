import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Loading from "../Loading/Loading";
import About from "../About/About";
import "./Main.css";

function Main({
  isLoggedIn,
  searchResults,
  isSearching,
  isPageLoading,
  savedNews,
  handleSaveArticle,
  handleUnsaveArticle,
  handleRemoveArticle,
  handleSignInModal,
}) {
  return (
    <>
      {isPageLoading === false ? (
        <NewsCardList
          isLoggedIn={isLoggedIn}
          searchResults={searchResults}
          isPageLoading={isPageLoading}
          isSearching={isSearching}
          savedNews={savedNews}
          handleSaveArticle={handleSaveArticle}
          handleUnsaveArticle={handleUnsaveArticle}
          handleRemoveArticle={handleRemoveArticle}
          handleSignInModal={handleSignInModal}
        />
      ) : (
        <Loading />
      )}
      <About />
    </>
  );
}

export default Main;
