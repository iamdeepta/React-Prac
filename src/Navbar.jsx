import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  //change navbar color on scroll
  const [changeNav, setChangeNav] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 80) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  window.addEventListener("scroll", changeNavBg);
  return (
    <>
      <div className={changeNav ? "navbar_main active" : "navbar_main active"}>
        <nav
          className="container navbar navbar-expand-lg navbar-dark"
          style={{ marginLeft: "180px" }}
        >
          <a
            className="navbar-brand nav_logo"
            href="/"
            style={{ paddingTop: 10 }}
          >
            React-Prac
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto" style={{ paddingTop: 10 }}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item" style={{ paddingLeft: 12 }}>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item" style={{ paddingLeft: 12 }}>
                <NavLink className="nav-link" to="/search-image">
                  Search Image
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
