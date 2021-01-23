import React from "react";
import "./SiesterMobile.css";
import siesterPhone from "../assets/siester-phone.png";
import siesterMobLogo from "../assets/siester-mobile.svg";
import comingSoon1 from "../assets/apple-store.jpg";
import comingSoon2 from "../assets/play-store.jpg";

const SiesterMobile = () => {
  return (
    <section id="siester-mobile">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="siester-mobile-container">
              <div className="siester-mobile-content">
                <div className="col s12 m6 l5">
                  <div className="siester-mobile-text">
                    <div className="siester-mobile-header">
                      <img src={siesterMobLogo} alt="siester mobile text" />
                    </div>
                    <p>
                      Siester is your trusted source for affordable spaces in
                      Lagos. Our portfolio of office spaces combines a
                      comprehensive selection of professionally furnished spaces
                      for rent. That means you have a lot of great options to
                      choose from. We have a location perfect for your every
                      business need. With Siester you’ll enjoy an easy leasing
                      experience with expert property management.
                    </p>
                    <div>
                      <div>
                        <h4>Features:</h4>
                      </div>

                      <ol>
                        <li>Affordable space</li>
                        <li>Expert property management</li>
                        <li>Long-term office rentals</li>
                      </ol>
                    </div>
                    <div className="mobile-app">
                      <div className="app">
                        <img src={comingSoon1} alt="comming soon" />
                      </div>
                      <div className="app">
                        <img src={comingSoon2} alt="comming soon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6 l6 offset-l1">
                  <div className="siester-mobile-img-div">
                    <img src={siesterPhone} alt="siester phone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiesterMobile;
