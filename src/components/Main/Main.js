import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Loading from "../Loading/Loading";
import "./Main.css";

function Main({ isLoggedIn, searchResults }) {
  return (
    <>
      <Loading />
      <NewsCardList isLoggedIn={isLoggedIn} searchResults={searchResults} />
    </>
  );
}

export default Main;
