import React, { useContext } from "react";
import "./gallery.css";

import { GlobalState } from "../../../GlobalState";
import Modal  from "../modal/Modal";

function Gallery(props) {
  const state = useContext(GlobalState);
  const [showModal, setShowModal] = state.showModal;
  const [imgModal, setImgModal] = state.imgModal;

  const galleryImgs = [
    "https://www.perfectionchain.com/wp-content/uploads/2019/03/Plant_01_web1.jpg",
    "https://www.perfectionchain.com/wp-content/uploads/2019/03/Plant_01_web1.jpg",
    "https://www.perfectionchain.com/wp-content/uploads/2019/03/Plant_01_web1.jpg",
    "https://www.perfectionchain.com/wp-content/uploads/2019/03/Plant_01_web1.jpg",
    "https://www.perfectionchain.com/wp-content/uploads/2019/03/Plant_01_web1.jpg",
    "https://www.perfectionchain.com/wp-content/uploads/2019/03/Plant_01_web1.jpg",
  ];

  const handleImg = (img) => {
    setShowModal(!showModal);
    setImgModal(img);
  };

  return (
    <div className="gallery-about">
      {galleryImgs.map((img, i) => {
        return (
          <div
            className="gallery-element"
            key={i}
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => {
              handleImg(img);
            }}
          >
            {/* <img src={img} alt="" /> */}
          </div>
        );
      })}

      <Modal />
    </div>
  );
}

export default Gallery;
