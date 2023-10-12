import React from "react";
import "./Footer.css";
import facebook from "../../images/facebook.svg";
import github from "../../images/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text"> © 2023 Supersite, Powered by News API</p>
        <ul className="footer__list-items">
          <li>
            <button className="footer__button">Home</button>
          </li>
          <li>
            <button className="footer__button">TripleTen</button>
          </li>
          <li>
            <button className="footer__button">
              <img src={github} alt="github logo" />
            </button>
          </li>
          <li>
            <button className="footer__button ">
              <img src={facebook} alt="facebook logo" />
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
