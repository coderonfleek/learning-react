import React from "react";
import Modal from "react-modal";

const OptionModal = props => {
  /* Using A third-party module */
  return (
    <Modal
      isOpen={props.open}
      onRequestClose={props.closeErrorModal}
      contentLabel="Some accessibility text"
      ariaHideApp={false}
    >
      <h2>Error Message</h2>
      <p>{props.error}</p>
      <button onClick={props.closeErrorModal}>Okay</button>
    </Modal>
  );
};

export default OptionModal;
