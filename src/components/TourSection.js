import React from "react";
import "./TourSection.css";
import tourImg from "../assets/tour-video.jpg";
import tourImg2 from "../assets/tour-video-xs.jpg";

const TourSection = () => {
  return (
    <section id="tour-section">
      <div className="hidden-xs">
        <div className="tour-img">
          <img src={tourImg} alt="tour video" />
        </div>
      </div>
      <div className="visible-xs">
        <div className="tour-img">
          <img src={tourImg2} alt="tour video" />
        </div>
      </div>
    </section>
  );
};

export default TourSection;
