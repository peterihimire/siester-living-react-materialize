import React from "react";
import "./Property.css";
import mapMarker from "../assets/location.svg";
import ModalSelect from "./Modal";
import LazySkeleton from "./LazySkeleton";
import { Link } from "react-router-dom";
import LazyImg from "../components/LazyImg";

const Property = ({ story }) => {
  // console.log(story);
  const { name, location, amount, completion, image, detail, id, slug } = story;

  // const LazyImg = ({ className, src, alt, lqip, aspectRatio = 2 / 3 }) => {
  //   const [loaded, setLoaded] = useState({
  //     loaded: false,
  //   });
  //   const imgRef = useRef();
  //   useEffect(() => {
  //     if (imgRef.current && imgRef.current.complete) {
  //       setLoaded({
  //         loaded: true,
  //       });
  //     }
  //   }, []);
  //   return (
  //     <div className="">
  //       <div className=""></div>
  //       {lqip && <img src={lqip} alt="" aria-hidden="true" />}
  //       <img
  //         loading="lazy"
  //         src={src}
  //         alt={alt}
  //         ref={imgRef}
  //         onLoad={() => setLoaded(true)}
  //         className=""
  //       />
  //     </div>
  //   );
  // };

  return (
    <>
      {/* <LazySkeleton /> */}
      <article>
        <div className="property-wrapper">
          <Link to={`/detail/${slug}`}>
            <div className="property-img-container card-imag loadin ">
              {/* <img src={image[0]} alt="property" className="property-img " /> */}
              <LazyImg
                className=""
                aspectRatio={16 / 10}
                src={image[0]}
                alt="houses"
                width="100%"
                lqip={<LazySkeleton />}
              />
            </div>
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
