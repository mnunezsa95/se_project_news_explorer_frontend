import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import "./Main.css";

function Main() {
  return (
    <>
      <NewsCardList />
      <NothingFound />
    </>
  );
}

export default Main;
