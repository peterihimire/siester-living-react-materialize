import React from "react";
import "./Property.css";
import mapMarker from "../assets/location.svg";
import ModalSelect from "./Modal";
import LazySkele from "./LazySkele";
import { Link } from "react-router-dom";
import LazyImg from "../components/LazyImg";
// import nodejs from "../assets/nodejs.svg";

const Property = ({ story }) => {
  // console.log(story);
  const { name, location, amount, completion, image, detail, id, slug } = story;

  return (
    <>
      {/* <LazySkeleton /> */}
      <article>
        <div className="property-wrapper">
          <Link to={`/detail/${slug}`}>
            {/* <div className="property-img-container card-imag loadin "> */}
            {/* <img src={image[0]} alt="property" className="property-img " /> */}
            <LazyImg
              className="demo"
              // aspectRatio={16 / 10}
              src={image[0]}
              alt="mansion"
              width="100%"
              lqip={<LazySkele />}
            />
            {/* </div> */}
          </Link>

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
        sg={slug}
      />
    </>
  );
};

export default Property;
