import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, onLoginModal, inSavedNews }) {
  return (
    <div className="nav">
      <div className="nav__left-container">
        <h1 className={`nav__logo ${inSavedNews && "nav__logo-saved-news"}`}>NewsExplorer</h1>
      </div>
      <div className="nav__right-container">
        <div className="nav__container-links">
          <Link to="/">
            <button className={`nav__button ${inSavedNews && "nav__button-saved-news"}`}>Home</button>
          </Link>
          {isLoggedIn && (
            <Link to="/saved-news">
              <button className={`nav__button ${inSavedNews && "nav__button-saved-news"}`}>Saved Articles</button>
            </Link>
          )}
          {isLoggedIn ? (
            <button className={`nav__button nav__button-logout ${inSavedNews && "nav__button-saved-news nav__button-logout-saved-news"}`}>Marlon</button>
          ) : (
            <button className="nav__button nav__button-signin" onClick={onLoginModal}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
