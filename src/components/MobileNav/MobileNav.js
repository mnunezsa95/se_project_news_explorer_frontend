import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";

function MobileNav({ isLoggedIn, inSavedNews, onLoginModal }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMenuToggle = () => setMobileMenu(!mobileMenu);

  return (
    <>
      <div className={`mobile__nav ${mobileMenu && "mobile__nav-dark"}`}>
        <h1 className={`mobile__nav-logo ${mobileMenu ? "mobile__nav-logo" : inSavedNews ? "mobile__nav-logo-saved-news" : ""}`}>NewsExplorer</h1>
        <button
          className={mobileMenu ? "mobile__nav-button-close" : `mobile__nav-button-hamburger ${inSavedNews && "mobile__nav-button-hamburger-saved-news"}`}
          onClick={handleMenuToggle}
        ></button>
      </div>
      {mobileMenu && (
        <div className="mobile__nav-menu">
          <div className="mobile__nav-menu-container">
            <Link to="/">
              <button className="mobile__nav-button">Home</button>
            </Link>
            {isLoggedIn && (
              <Link to="/saved-news">
                <button className="mobile__nav-button">Saved Articles</button>
              </Link>
            )}
            {isLoggedIn ? (
              <button className="mobile__nav-button mobile__nav-button-logout">Marlon</button>
            ) : (
              <button className="mobile__nav-button mobile__nav-button-signin" onClick={onLoginModal}>
                Sign in
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNav;
