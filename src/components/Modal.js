import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// import logo from "../assets/logo.svg";
// import logoAlt from "../assets/logo-alt.svg";
import modalClose from "../assets/p-modal-close.svg";
import "./Modal.css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);
    // If you want to work on instance of the Modal then you can use the below code snippet
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }
  render() {
    console.log(this.props);
    const { imgs, amt, nm, lc, dt } = this.props;
    // console.log(imgs, amt, nm);
    return (
      <>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal-select"
          className="modal "
        >
          <div className="modal-content ">
            <div className="modal-close-div">
              <img src={modalClose} alt="modal close" className="modal-close" />
            </div>

            <div className="my-lightbox">
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
            <div className="modal-text">
              <h4>{nm}</h4>
              <p className="lc">{lc}</p>
              <p>{dt}</p>
              <p className="amt">₦{amt}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
