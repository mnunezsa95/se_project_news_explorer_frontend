import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Navigation({ isLoggedIn, onLoginModal, onLogout }) {
  const reactLocation = useLocation();
  const currentLocation = reactLocation.pathname;
  const showActive = window.location.pathname;

  return (
    <div className="nav">
      <div className="nav__left-container">
        <h1 className={`nav__logo ${currentLocation === "/saved-news" && "nav__logo-saved-news"}`}>NewsExplorer</h1>
      </div>
      <div className="nav__right-container">
        <div className="nav__container-links">
          <Link to="/">
            <button className={`nav__button ${currentLocation === "/saved-news" && "nav__button-saved-news"} ${showActive === "/" && "nav__button-active"}`}>
              Home
            </button>
          </Link>
          {isLoggedIn && (
            <Link to="/saved-news">
              <button
                className={`nav__button  ${currentLocation === "/saved-news" && "nav__button-saved-news"} ${
                  showActive === "/saved-news" && "nav__button-active-saved-news"
                }`}
              >
                Saved Articles
              </button>
            </Link>
          )}
          {isLoggedIn ? (
            <button
              className={`nav__button nav__button-logout ${currentLocation === "/saved-news" && "nav__button-saved-news nav__button-logout-saved-news"}`}
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
