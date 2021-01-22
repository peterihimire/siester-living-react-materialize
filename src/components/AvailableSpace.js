import React from "react";
import "./AvailableSpace.css";
import spaceOne from "../assets/space-1.png";
import spaceTwo from "../assets/space-2.png";
import spaceThree from "../assets/space-3.png";

const AvailableSpace = () => {
  return (
    <section id="available-space">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="available-spaces-container">
              <div className="available-header">
                <h4>Check out our available space</h4>
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
              <div className="available-info">
                <p>Want more information ? Call 08060958134</p>
                <button className="btn">book now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableSpace;
