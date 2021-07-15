import { useState } from "react";

import "./header.scss";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <button
        className={`hamburger hamburger--arrow ${navActive ? "is-active" : ""}`}
        type="button"
        onClick={toggleNav}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className="desktop-heading">
        <h2>
          Jahaan Scipio<span className="position"> - Architect & Designer</span>
        </h2>
      </div>

      <div className={`desktop-menu ${navActive ? "active" : ""}`}>
        <nav>
          <div className="title">
            <h2>Jahaan Scipio</h2>
            <h3>Architect & Designer</h3>
          </div>
          <div className="internal-links">
            <a href="google.com">About</a>
            <a href="google.com">Work</a>
          </div>
          <div className="external-links"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
