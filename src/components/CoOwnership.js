import React from "react";
import "./CoOwnership.css";
import homeImg from "../assets/home-img.jpg";
// import LazyImg from "../components/LazyImg";
// import LazySkele from "../components/LazySkele";

const CoOwnership = () => {
  return (
    <section id="coownership">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="coownership-container ">
              <h4 className="center">
                Home <span>Co-Ownership</span>{" "}
              </h4>
              <div className="coownership-content">
                <div className="col s12 m6 l6">
                  <div className="coownership-img-div">
                    <img src={homeImg} alt="classic-home" />
                    {/* <LazyImg
                      className="demo"
                      // aspectRatio={16 / 10}
                      src={homeImg}
                      alt="mansion"
                      width="100%"
                      lqip={<LazySkele />}
                    /> */}
                  </div>
                </div>
                <div className="col s12 m6 l5 offset-l1">
                  <div className="coownership-text">
                    <p>
                      Own a home in Lekki and its environs, or at least part of
                      one from just N1,000,000, and have it generate for you a
                      quarter of its value in rent, FOREVER.
                    </p>
                    <p>
                      The average value of rent in a 40 Million Naira Lekki home
                      is N3-4Million per year. For short rentals? That rental
                      value goes up to N12Million per year, and this is based on
                      occupancy at only 65% of the time.
                    </p>
                    <p>
                      When you co-own a home, it is yours forever. Generating
                      revenue for you perpetually.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoOwnership;
