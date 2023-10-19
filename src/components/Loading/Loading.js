import React from "react";
import "./Loading.css";
import NothingFound from "../NothingFound/NothingFound";

function Loading() {
  const result = true;
  return (
    <div className="loading__container">
      {result === false ? (
        <>
          <div className="loading__spinner"></div>
          <p className="loading__text">Searching for news...</p>
        </>
      ) : (
        <NothingFound />
      )}
    </div>
  );
}

export default Loading;
