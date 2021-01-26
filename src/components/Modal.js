import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// import logo from "../assets/logo.svg";
// import logoAlt from "../assets/logo-alt.svg";
// import x from "../assets/x.svg";
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
    return (
      <>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal-select"
          className="modal"
        >
          <div className="modal-content">
            <h3>This is the modal</h3>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
