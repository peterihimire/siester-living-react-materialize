import React from "react";
import "./Detail.css";
// import M from "materialize-css/dist/js/materialize.min.js";

const Detail = () => {
  return (
    <section>
      <div className="detail-content ">
        <h4> This is the detail component</h4>
        {/* <div className="modal-close-div">
        <img src={modalClose} alt="modal close" className="modal-close" />
      </div> */}

        {/* <div className="my-lightbox">
          <div className="">
            <div className="big-img">
              <img src={imgs[0]} alt="main-big" />
            </div>
            <div className="small-img">
              {imgs.map((img) => (
                <img src={img} alt="img array" />
              ))}
            </div>
          </div>
        </div>
        <div className="detail-text">
          <h4>{nm}</h4>
          <p className="lc">{lc}</p>
          <p>{dt}</p>
          <p className="amt">₦{amt}</p>
        </div> */}
      </div>
    </section>
  );
};

export default Detail;
