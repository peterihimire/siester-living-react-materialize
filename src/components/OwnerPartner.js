import React from "react";
import "./OwnerPartner.css";
import homeOne from "../assets/home-1.jpg";
import homeTwo from "../assets/home-2.jpg";
import homeThree from "../assets/home-3.jpg";

const OwnerPartner = () => {
  return (
    <section id="available-space">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="available-spaces-container">
              <div className="available-header">
                <h4>
                  <span>Home Owner?</span> Let's partner
                </h4>
              </div>
              <div className="col s12 m4 l4">
                <div className="space-img">
                  <img src={homeOne} alt="home interior" />
                </div>
              </div>
              <div className="col s12 m4 l4">
                <div className="space-img">
                  <img src={homeTwo} alt="home interior" />
                </div>
              </div>
              <div className="col s12 m4 l4">
                <div className="space-img">
                  <img src={homeThree} alt="home interior" />
                </div>
              </div>
              <div className="available-info">
                <p>
                  Do you know the true annual revenue potential of your home?
                  Quick tip. It is worth more than 3x the annual rent. Let us
                  show you.
                </p>
                <button className="btn">contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerPartner;
