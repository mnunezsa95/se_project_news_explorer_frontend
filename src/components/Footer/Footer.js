import React from "react";
import "./Footer.css";
import linkedin from "../../images/linkedin2.svg";
import github from "../../images/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text"> © 2023 Supersite, Powered by News API</p>
        <ul className="footer__list-items">
          <li>
            <a className="footer__link" href="#header">
              Home
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://tripleten.com/">
              TripleTen
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/mnunezsa95">
              <img className="footer__link-social" src={github} alt="github logo" />
            </a>
          </li>
          <li>
            <a className="footer__link " href="https://www.linkedin.com/in/marlon-nunez-35ba43b4/">
              <img class="footer__link-social" src={linkedin} alt="linkedin logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
