import React from "react";
import About from "../About/About";

import NewsCardList from "../NewsCardList/NewsCardList";
import Loading from "../Loading/Loading";
import "./Main.css";

function Main() {
  return (
    <>
      <About />
      <NewsCardList />
      <Loading />
    </>
  );
}

export default Main;
