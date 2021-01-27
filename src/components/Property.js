import React from "react";
import "./Property.css";
import mapMarker from "../assets/location.svg";
import ModalSelect from "./Modal";

const Property = ({ story }) => {
  console.log(story);
  const { name, location, amount, completion, image } = story;
  return (
    <>
      <article>
        <div className="property-wrapper">
          <div className="property-img-container">
            <img src={image[0]} alt="property" className="property-img" />
          </div>
          <p>{name}</p>
          <div className="property-location">
            <img src={mapMarker} alt="map" />
            <span>{location}</span>
          </div>
          <p> ₦ {amount}</p>
          <div className="">investment competition {completion}</div>
          <button className="btn property-btn ">
            <a href="#modal-select" className="modal-trigger">
              select
            </a>{" "}
          </button>
        </div>
      </article>
      <ModalSelect imgs={image} />
    </>
  );
};

export default Property;
