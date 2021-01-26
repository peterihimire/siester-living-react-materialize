import React from "react";
import "./Modal.css";
import M from "materialize-css/dist/js/materialize.min.js";

const Modal = () => {
  React.useEffect(() => {
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
    M.Modal.init(Modal, options);
  }, []);
  return (
    <>
      <div
        ref={(Modal) => {
          Modal = Modal;
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
};

export default Modal;
