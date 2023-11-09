import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./MobileNav.css";

function MobileNav({ isLoggedIn, onSignInModal, onLogout }) {
  const reactLocation = useLocation();
  const currentLocation = reactLocation.pathname;
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMenuToggle = () => setMobileMenu(!mobileMenu);

  return (
    <>
      <div className={mobileMenu ? "mobile__nav-dark" : "mobile__nav"}>
        <h2 className={mobileMenu ? "mobile__nav-logo" : currentLocation === "/" ? "mobile__nav-logo" : "mobile__nav-logo-saved-news"}>NewsExplorer</h2>
        <button
          className={mobileMenu ? "mobile__nav-btn-close" : currentLocation === "/" ? "mobile__nav-btn-hamburger" : "mobile__nav-btn-hamburger-saved-news"}
          onClick={handleMenuToggle}
        ></button>
      </div>
      {mobileMenu && (
        <nav className="mobile__nav-menu">
          <ul className="mobile__nav-menu-container">
            <li className="mobile__nav-link">
              <Link to="/">
                <button className={currentLocation === "/" ? "mobile__nav-btn-active" : "mobile__nav-btn"}>Home</button>
              </Link>
            </li>
            {isLoggedIn && (
              <li className="mobile__nav-link">
                <Link to="/saved-news">
                  <button className={currentLocation === "/saved-news" ? "mobile__nav-btn-active" : "mobile__nav-btn"}>Saved Articles</button>
                </Link>
              </li>
            )}
            {isLoggedIn ? (
              <li className="mobile__nav-btn-link">
                <button className="mobile__nav-btn-logout" onClick={onLogout}>
                  Marlon
                </button>
              </li>
            ) : (
              <li className="mobile__nav-btn-link">
                <button className="mobile__nav-btn-signin" onClick={onSignInModal}>
                  Sign in
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
}

export default MobileNav;
