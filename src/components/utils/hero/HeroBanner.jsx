import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./heroBanner.css";

function HeroBanner(props) {
  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 2000,
  };

  function AutoPlayMethods() {
    let sliderRef = useRef(null);
    const play = () => {
      sliderRef.slickPlay();
    };
    const pause = () => {
      sliderRef.slickPause();
    };
  }

  const imgs = ["https://res.cloudinary.com/dz6lrvj7u/image/upload/v1713532248/Hero/banner/em8ycrsi7gcjg52f9ymt.png", "https://res.cloudinary.com/dz6lrvj7u/image/upload/v1713532240/Hero/banner/nk2dcxezo9kcsjo7vryy.png", "https://res.cloudinary.com/dz6lrvj7u/image/upload/v1713532236/Hero/banner/vkmwlpidp5uvbtxb6umq.png", "https://res.cloudinary.com/dz6lrvj7u/image/upload/v1713532232/Hero/banner/nnbpnmv04bke44ufgxut.png" ]

  return (
    <section className="hero-banner">
      
      <Slider
        ref={(slider) => (sliderRef = slider)}
        {...settings}
        className="products-slider"
      >
        {imgs.map((img) => {
            return <img src={img}></img>
        })}
      
      </Slider>
    </section>
  );
}

export default HeroBanner;
