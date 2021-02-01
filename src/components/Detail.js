import React from "react";
import "./Detail.css";
// import M from "materialize-css/dist/js/materialize.min.js";
import modalClose from "../assets/p-modal-close.svg";
import { Link } from "react-router-dom";

const Detail = (props) => {
  // console.log(props);
  const { oneProperty } = props;
  // console.log(oneProperty);

  const {
    name,
    location,
    amount,
    slug,
    id,
    image,
    detail,
    completion,
  } = oneProperty;
  console.log(name, location, amount, slug, id, image, detail, completion);
  return (
    <section className="detail-section">
      <div className="detail-content ">
        <div className="modal-close-div">
          <Link to="/co-ownership">
            <img src={modalClose} alt="modal close" className="" />
          </Link>
        </div>
        <div className="my-lightbox">
          <div className="">
            <div className="big-img">
              <img src={image[0]} alt="main-big" />
            </div>
            <div className="small-img">
              {image.map((img) => (
                <img src={img} alt="img array" key={img} />
              ))}
            </div>
          </div>
        </div>
        <div className="detail-text">
          <h4>{name}</h4>
          <p className="lc">{location}</p>
          <p>{detail}</p>
          <p className="amt">₦{amount}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
