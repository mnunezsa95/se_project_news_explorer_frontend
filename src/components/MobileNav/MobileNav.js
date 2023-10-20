import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";

function MobileNav({ isLoggedIn, inSavedNews, onLoginModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className={`mobile__nav ${isMenuOpen && "mobile__nav-dark"}`}>
        <h1 className={`mobile__nav-logo ${inSavedNews && "mobile__nav-logo-saved-news"}`}>NewsExplorer</h1>
        <button
          className={
            isMenuOpen
              ? `mobile__nav-button-close ${inSavedNews && "mobile__nav-button-close-saved-news"}`
              : `mobile__nav-button-hamburger ${inSavedNews && "mobile__nav-button-hamburger-saved-news"}`
          }
          onClick={handleMenuToggle}
        ></button>
      </div>
      {isMenuOpen && (
        <div className="mobile__nav-menu">
          <div className="mobile__nav-menu-container">
            <Link to="/">
              <button className={`mobile__nav-button ${inSavedNews && "mobile__nav-button-saved-news"}`}>Home</button>
            </Link>
            {isLoggedIn && (
              <Link to="/saved-news">
                <button className={`mobile__nav-button ${inSavedNews && "mobile__nav-button-saved-news"}`}>Saved Articles</button>
              </Link>
            )}
            {isLoggedIn ? (
              <button className={`mobile__nav-button mobile__nav-button-logout ${inSavedNews && ""}`}>Marlon</button>
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
