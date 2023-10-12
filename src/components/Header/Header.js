import { React } from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Navigation />
      <h1>What's going on in the world?</h1>
      <p>Find the lastest news on any topic and save them in your personal account</p>
    </div>
  );
}

export default Header;
