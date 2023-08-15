import React, { useCallback, useContext, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import { ReactComponent as Close } from "../../../assets/icons/utils/close.svg";
import { ReactComponent as Controllers } from "../../../assets/icons/utils/controllers.svg";
import "./modal.css";

function Modal() {
  const state = useContext(GlobalState);
  const [showModal, setShowModal] = state.showModal;
  const [imgModal, setImgModal] = state.imgModal;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className={showModal ? "modal-container active" : "modal-container"}>
      <Close
        className="close-icon"
        onClick={() => {
          setShowModal(false);
        }}
      />

      <div className="modal">
        <Controllers className="control-next" />
        <img src={imgModal} alt="" />
        <Controllers className="control-prev" />
      </div>
    </div>
  );
}

export default Modal;
