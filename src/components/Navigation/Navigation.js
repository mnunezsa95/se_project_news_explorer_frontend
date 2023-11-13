import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./Navigation.css";

function Navigation({ isLoggedIn, onSignInModal, onLogout }) {
  const reactLocation = useLocation();
  const currentLocation = reactLocation.pathname;
  const currentUser = useContext(CurrentUserContext);

  return (
    <nav className="nav">
      <div className="nav__left-container">
        <h2 className={currentLocation === "/" ? "nav__logo" : "nav__logo-saved-news"}>NewsExplorer</h2>
      </div>
      <div className="nav__right-container">
        <ul className="nav__container-links">
          <li>
            <Link to="/">
              <button className={currentLocation === "/" ? "nav__btn nav__btn-active" : "nav__btn-saved-news"}>Home</button>
            </Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/saved-news">
                <button className={currentLocation === "/saved-news" ? "nav__btn-saved-news nav__btn-active-saved-news" : "nav__btn"}>Saved Articles</button>
              </Link>
            </li>
          )}
          {isLoggedIn ? (
            <li>
              <button className={currentLocation === "/" ? "nav__btn-logout" : "nav__btn-logout-saved-news"} onClick={onLogout}>
                {currentUser ? currentUser.name : ""}
              </button>
            </li>
          ) : (
            <li>
              <button className="nav__btn-signin" onClick={onSignInModal}>
                Sign in
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
