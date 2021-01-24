import React from "react";
import "./AboutUs.css";
import spaceOne from "../assets/space-1.png";
import spaceTwo from "../assets/space-2.png";
import spaceThree from "../assets/space-3.png";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="about-container">
              <div className="about-header center">
                <h4>About Us</h4>
              </div>
              <div className="col s12 m4 l4">
                <div className="space-img">
                  <img src={spaceOne} alt="home interior" />
                </div>
              </div>
              <div className="col s12 m4 l4">
                <div className="space-img">
                  <img src={spaceTwo} alt="home interior" />
                </div>
              </div>
              <div className="col s12 m4 l4">
                <div className="space-img">
                  <img src={spaceThree} alt="home interior" />
                </div>
              </div>
              <div className="about center" >
                <p>
                  Siester Living is a Procredita company with a goal to
                  revolutionise real estate in Lagos by creating more value for
                  all across the board. Our short-let services allow us to
                  compete within the hospitality industry, giving visitors of
                  our apartment for value in terms of space and luxury for a
                  fraction of what is obtainable in regular hotels. We are an
                  affordable luxury for a time where a get away is needed
                  without the disturbance of room service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
