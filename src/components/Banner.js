import React from "react";
import "./Banner.css";
import bannerImg1 from "../assets/banner-1.png";
import bannerImg2 from "../assets/banner-2.png";
import bannerImg1Xs from "../assets/banner-1-xs.png";
import bannerImg2Xs from "../assets/banner-2-xs.png";
import M from "materialize-css/dist/js/materialize.min.js";

const Banner = () => {
  // MATERIALIZE-CSS CAROUSEL WITH REACT HELPER FUNCTIONS
  React.useEffect(() => {
    const headerCarousel = document.querySelector(".carousel");
    const carouselH = document.querySelector(".carousel.carousel-slider");
    const carouselVx = document.querySelector(
      ".carousel.carousel-slider.visible-xs.mbxs"
    );
    M.Carousel.init(headerCarousel, {});
    M.Carousel.init(carouselH, {
      fullWidth: true,
    });
    M.Carousel.init(carouselVx, {
      fullWidth: false,
    });

    window.onload = function () {
      initCarousel(".carousel", {
        fullWidth: true,
        // indicators: true,
        autoScroll: 5000, // time in ms
      });
    };

    function initCarousel(elms, opts) {
      if (!window || !document) return null;

      const instances = M.Carousel.init(getElements(elms), opts);

      if (Array.isArray(instances)) {
        for (let i = 0; i < instances.length; ++i) {
          addAutoScroll(instances[i]);
        }
      } else {
        addAutoScroll(instances);
      }

      return instances;
    }

    function addAutoScroll(instance) {
      if (!instance.options.autoScroll) return;

      instance.autoScrollIntervalId = window.setInterval(() => {
        instance.next();
      }, instance.options.autoScroll);
    }

    function getElements(elms) {
      if (elms.charAt(0) === "#") {
        elms = elms.replace("#", "");
        return document.getElementById(elms);
      }

      return document.querySelectorAll(elms);
    }
  });

  return (
    <section id="home">
      <div className="row full-height">
        <div className="full-height phone-main visible-xs">
          <div className="for-phone visible-xs">
            <img
              src={bannerImg1Xs}
              alt="banner"
              className="phone-home-img visible-xs" // This is where the problem is, in the home-abs-img class
            />
            <div className="container">
              <div className="main-txt-wrapper col s12 m10 l4 center-xs">
                <h1 className="banner-title pri-color">
                  <span className="sec-color">Rent a home for</span>
                  <br className="hidden-xs" /> a day or more
                </h1>

                <div className="home-btn-wrapper">
                  <button
                    className="modal-trigger home-banner-btn"
                    data-target="book-now"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel carousel-slider full-height hidden-xs">
          <div
            className="carousel-item slide-banner"
            id="first-slide"
            href="#one!"
          >
            <img
              src={bannerImg1}
              alt="banner"
              className="home-abs-img hidden-xs"
            />
            <img
              src={bannerImg1Xs}
              alt="banner"
              className="home-abs-img visible-xs"
            />
            <div className="container">
              <div className="main-txt-wrapper col s12 m10 l4 center-xs">
                <h1 className="banner-title pri-color">
                  <span className="sec-color">Rent a home for</span>
                  <br className="hidden-xs" />a day or more
                </h1>

                <div className="home-btn-wrapper">
                  <button
                    className="modal-trigger home-banner-btn"
                    data-target="book-now"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item slide-banner"
            id="second-slide"
            href="#two!"
          >
            <img
              src={bannerImg2}
              alt="banner"
              className="home-abs-img hidden-xs"
            />
            <img
              src={bannerImg2Xs}
              alt="banner"
              className="home-abs-img visible-xs"
            />
            <div className="container">
              <div className="main-txt-wrapper col s12 m10 l4 center-xs">
                <h1 className="banner-title pri-color">
                  <span className="sec-color">Need a place to throw</span>{" "}
                  <br className="hidden-xs" />a house party?
                </h1>
                <p>
                  <span>
                    Rent a fully furnished villa in Lagos from as low as
                    <span className="bold-txt pri-color">N50,000 per day</span>.
                    Cheaper than a hotel, with a lot of rooms to spare.
                  </span>
                </p>

                <div className="home-btn-wrapper">
                  <button
                    className="modal-trigger home-banner-btn"
                    data-target="book-now"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
