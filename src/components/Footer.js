import React from "react";
import "./Footer.css";
import logoAlt from "../assets/siester-logo-white.svg";
import phoneIcon from "../assets/phone-icon.svg";
import mailIcon from "../assets/mail-icon.svg";
import instaIcon from "../assets/instagram.svg";
import fbIcon from "../assets/facebook.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className=" col s12 footer-logo">
            <Link to="/">
              <img src={logoAlt} alt="logo alt" />
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="col s12 m12 l3 ">
              <div className="s12 m4  white-text footer-form">
                <h6>Join our mailing list</h6>
                <form>
                  <input name="email" required placeholder="Enter your email" />
                  <div className="sub-btn-container">
                    <button className="btn btn-bigger btn-full-width footer-btn pry-btn">
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col s12 m12 l8 offset-l1 ">
              <div className="row">
                <div className="col s6 m3 ">
                  <div className="footer-content">
                    <h6>legal</h6>
                    <ul>
                      <li>privacy</li>
                      <li>terms</li>
                    </ul>
                  </div>
                </div>
                <div className="col s6 m3 ">
                  <div className="footer-content">
                    <h6>company</h6>
                    <ul>
                      <li>about us</li>
                      <li>FAQ</li>
                      <li>co-ownership</li>
                    </ul>
                  </div>
                </div>
                <div className="col s6 m3 ">
                  <div className="footer-content">
                    <h6>contact</h6>
                    <ul>
                      <li>
                        <span>
                          <img src={phoneIcon} alt="phone icon" />
                        </span>
                        +234 806 0958 134
                      </li>

                      <li>
                        <span>
                          <img src={mailIcon} alt="phone icon" />
                        </span>
                        peterihimire@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col s6 m3 ">
                  <div className="footer-content">
                    <h6>follow us</h6>
                    <ul>
                      <li>
                        <img
                          src={instaIcon}
                          alt="phone icon"
                          className="insta-icon"
                        />
                        <img
                          src={fbIcon}
                          alt="phone icon"
                          className="fb-icon"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright col s12 center">
          <p>Copyright &copy; 2020 Siester Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
