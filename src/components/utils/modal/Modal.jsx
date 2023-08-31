import React, { useCallback, useContext, useEffect } from "react";

import { GlobalState } from "../../../GlobalState";

import { ReactComponent as Close } from "../../../assets/icons/utils/close.svg";

import { ReactComponent as Controllers } from "../../../assets/icons/utils/controllers.svg";

import { saveAs } from "file-saver";

import "./modal.css";

function Modal() {
  const state = useContext(GlobalState);

  const [productSelected, setProductSelected] =
    state.categories.productSelected;

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

  const DownloadFunc = (url) => {
    saveAs(
      `${url}`,
      `El Abrojal - ${productSelected.category} - ${productSelected.title}.jpg`
    );
  };

  return (
    <div
      className={showModal ? "modal-container active" : "modal-container"}
      onClick={() => {
        setShowModal(false);
      }}
    >
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

      <button
        onClick={() => {
          DownloadFunc(imgModal);
        }}
      >
        Descargar
      </button>
    </div>
  );
}

export default Modal;
