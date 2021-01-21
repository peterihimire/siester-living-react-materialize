import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/siester-logo.svg";
import logoWhite from "../assets/siester-logo-white.svg";
import close from "../assets/close-icon.svg";
import menu from "../assets/menu-icon.svg";
import { NavLink, Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const Navbar = () => {
  useEffect(() => {
    // sidenav
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  });

  return (
    <>
      <div>
        <nav className="trans-nav">
          <div className="container nav-wrapper">
            <div className="logo-container">
              <Link to="/" className="brand-logo left">
                <img src={logo} alt="paymonthly" className="logo" />
              </Link>
            </div>
            <a
              href="/"
              className="right sidenav-trigger show-on-large"
              data-target="mobile-nav"
            >
              <img src={menu} alt="menu icon" className="" />
            </a>

            {/* <ul className="hide right nav-links">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link "
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link"
                  to="/about"
                >
                  Co-Ownership
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="navbar-single-link"
                  to="/faq"
                >
                  FAQs
                </NavLink>
              </li>
            </ul> */}
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-nav">
        <div className="sidenav-close">
          <img src={close} alt="close-icon " />
        </div>
        <div className="sidenav-logo">
          <Link to="/">
            <img src={logoWhite} alt="paymonthly-logo" />
          </Link>
        </div>

        <li className="nav-item ">
          <NavLink
            exact
            activeClassName="active-2"
            className="navbar-single-link-2"
            to="/"
          >
            home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            activeClassName="active-2"
            className="navbar-single-link-2"
            to="/about"
          >
            about us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            activeClassName="active-2"
            className="navbar-single-link-2"
            to="/about"
          >
            co-ownership
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            activeClassName="active-2"
            className="navbar-single-link-2"
            to="/faq"
          >
            FAQs
          </NavLink>
        </li>
        {/* 
        <li className="nav-item login-style">
          <a href="#log-in" className="modal-trigger sidenav-login">
            log in
          </a>
        </li>
        <li className="nav-item signup-style ">
          <a href="#get-started" className=" modal-trigger sidenav-signup ">
            get started
          </a>
        </li> */}

        <div className="sidenav-footer ">
          <div className="sidenav-footer-container center">
            {/* <div class="sidenav-social-icons">
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
              </div> */}
            <div className="sidenav-footer-text">
              <p>
                ©COPYRIGHT <span> SIESTERLIVING</span> 2021
              </p>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
