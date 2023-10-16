import { React } from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({ onLoginModal }) {
  return (
    <header className="header" id="header">
      <Navigation onLoginModal={onLoginModal} />
      <div className="header__container">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__subtitle">Find the lastest news on any topic and save them in your personal account</p>
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
