import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Loading from "../Loading/Loading";
import "./Main.css";

function Main({ isLoggedIn }) {
  return (
    <>
      <Loading />
      <NewsCardList isLoggedIn={isLoggedIn} />
    </>
  );
}

export default Main;
