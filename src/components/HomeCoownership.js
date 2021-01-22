import React from "react";
import "./HomeCoownership.css";
import homeImg from "../assets/home-img.jpg";
import { Link } from "react-router-dom";

const HomeCoownership = () => {
  return (
    <section id="home-coownership">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="home-coownership-container">
              <h4>
                Home <span>Co-Ownership</span>{" "}
              </h4>
              <div className="col s12 m6">
                <div className="home-coownership-img-div">
                  <img src={homeImg} alt="classic-home" />
                </div>
              </div>
              <div className="col s12 m6">
                <p>
                  Own a home in Lekki and its environs, or at least part of one
                  from just N1,000,000, and have it generate for you a quarter
                  of its value in rent, FOREVER.
                </p>
                <p>
                  The average value of rent in a 40 Million Naira Lekki home is
                  N3-4Million per year. For short rentals? That rental value
                  goes up to N12Million per year, and this is based on occupancy
                  at only 65% of the time.
                </p>
                <p>
                  When you co-own a home, it is yours forever. Generating
                  revenue for you perpetually.
                </p>
              </div>
              <div className="home-coownership-btn-div">
                <Link to="/" className="btn">
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCoownership;
