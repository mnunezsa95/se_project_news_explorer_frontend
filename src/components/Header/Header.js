import { React } from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MobileNav from "../MobileNav/MobileNav";
import "./Header.css";

function Header({ isLoggedIn, onSignInModal, onLogout, onSubmit }) {
  return (
    <header className="header" id="header">
      <Navigation isLoggedIn={isLoggedIn} onSignInModal={onSignInModal} onLogout={onLogout} />
      <MobileNav isLoggedIn={isLoggedIn} onSignInModal={onSignInModal} onLogout={onLogout} />
      <div className="header__container">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__subtitle">Find the lastest news on any topic and save them in your personal account</p>
        <SearchForm onSubmit={onSubmit} />
      </div>
    </header>
  );
}

export default Header;
