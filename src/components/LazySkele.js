import React from "react";
import "./LazySkeleton.css";

const LazySkele = () => {
  return (
    <div className="containe">
      <section className="skeleton-card">
        <figure className="card-image loading"></figure>
        {/* <div className="card-detail">
          <h3 className="card-title loading"></h3>
          <p className="card-description loading"></p>
        </div> */}
      </section>
    </div>
  );
};

export default LazySkele;
