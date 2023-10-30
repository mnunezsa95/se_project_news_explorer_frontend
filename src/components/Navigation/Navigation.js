import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./Navigation.css";

function Navigation({ isLoggedIn, onLoginModal, onLogout }) {
  const reactLocation = useLocation();
  const currentLocation = reactLocation.pathname;

  return (
    <div className="nav">
      <div className="nav__left-container">
        <h1 className={currentLocation === "/" ? "nav__logo" : "nav__logo-saved-news"}>NewsExplorer</h1>
      </div>
      <div className="nav__right-container">
        <div className="nav__container-links">
          <Link to="/">
            <button className={currentLocation === "/" ? "nav__btn nav__btn-active" : "nav__btn-saved-news"}>Home</button>
          </Link>
          {isLoggedIn && (
            <Link to="/saved-news">
              <button className={currentLocation === "/saved-news" ? "nav__btn-saved-news nav__btn-active-saved-news" : "nav__btn"}>Saved Articles</button>
            </Link>
          )}
          {isLoggedIn ? (
            <button className={currentLocation === "/" ? "nav__btn-logout" : "nav__btn-logout-saved-news"} onClick={onLogout}>
              Marlon
            </button>
          ) : (
            <button className="nav__btn-signin" onClick={onLoginModal}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
