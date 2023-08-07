import React, { useState } from "react";

import classes from "./Header.module.css";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className={classes["header-container"]}>
      <div className={classes["hamburger-icon"]} onClick={toggleMenu}>
        ☰
      </div>
      <ul
        className={`${classes["navigation-links-list"]} ${
          showMenu ? classes["show-menu"] : classes["hide-menu"]
        }`}
      >
        <li className={classes["navigation-list-item"]}>
          <a>About</a>
        </li>
        <li className={classes["navigation-list-item"]}>
          <a>Projects</a>
        </li>
        <li className={classes["navigation-list-item"]}>
          <a>Skills</a>
        </li>
      </ul>
      <div
        className={`${classes["navigation-backdrop"]} ${
          showMenu ? classes["show-backdrop"] : ""
        }`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
};

export default Header;
