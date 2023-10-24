import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Navigation({ isLoggedIn, onLoginModal, onLogout }) {
  const location = useLocation().pathname;

  return (
    <div className="nav">
      <div className="nav__left-container">
        <h1 className={`nav__logo ${location === "/saved-news" && "nav__logo-saved-news"}`}>NewsExplorer</h1>
      </div>
      <div className="nav__right-container">
        <div className="nav__container-links">
          <Link to="/">
            <button className={`nav__button ${location === "/saved-news" && "nav__button-saved-news"}`}>Home</button>
          </Link>
          {isLoggedIn && (
            <Link to="/saved-news">
              <button className={`nav__button ${location === "/saved-news" && "nav__button-saved-news"}`}>Saved Articles</button>
            </Link>
          )}
          {isLoggedIn ? (
            <button
              className={`nav__button nav__button-logout ${location === "/saved-news" && "nav__button-saved-news nav__button-logout-saved-news"}`}
              onClick={onLogout}
            >
              Marlon
            </button>
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
