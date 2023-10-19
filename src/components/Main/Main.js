import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Loading from "../Loading/Loading";
import "./Main.css";

function Main() {
  return (
    <>
      <NewsCardList />
      <Loading />
    </>
  );
}

export default Main;
