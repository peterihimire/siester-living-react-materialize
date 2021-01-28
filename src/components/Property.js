import React from "react";
import "./Property.css";
import mapMarker from "../assets/location.svg";
import ModalSelect from "./Modal";

const Property = ({ story }) => {
  console.log(story);
  const { name, location, amount, completion, image, detail, id } = story;
  return (
    <>
      <article>
        <div className="property-wrapper">
          <div className="property-img-container">
            <img src={image[0]} alt="property" className="property-img" />
          </div>
          <div className="name-div">
            <p>{name}</p>
          </div>

          <div className="property-location">
            <img src={mapMarker} alt="map" />
            <span>{location}</span>
          </div>
          <p> ₦ {amount}</p>
          <div className="">investment competition {completion}</div>

          <a
            href="#modal-select"
            className="modal-trigger btn property-btn"
            width="100%"
          >
            select
          </a>
        </div>
      </article>
      <ModalSelect
        imgs={image}
        amt={amount}
        nm={name}
        lc={location}
        dt={detail}
        id={id}
      />
    </>
  );
};

export default Property;
