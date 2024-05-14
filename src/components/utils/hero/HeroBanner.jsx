import React, { useEffect, useRef } from "react";
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
    autoPlaySpeed: 1000,
  };

  const imgs = ["https://res.cloudinary.com/dz6lrvj7u/image/upload/v1715606408/Hero/banner/hero-1.avif", "https://res.cloudinary.com/dz6lrvj7u/image/upload/v1715607314/Hero/banner/hero-2.avif", "https://res.cloudinary.com/dz6lrvj7u/image/upload/v1715606647/Hero/banner/hero-3.avif", "https://res.cloudinary.com/dz6lrvj7u/image/upload/v1715606786/Hero/banner/hero-4.avif"]

  const localUrl = '/assets/banner/'

  const localImgs = [`${localUrl}/hero-1.avif`, `${localUrl}/hero-2.avif`, `${localUrl}/hero-3.avif`, `${localUrl}/hero-4.avif` ]
console.log(localImgs)
  
  return (
    <section className="hero-banner">
      <Slider

        {...settings}

      >
        {imgs.map((img) => {
          return <img src={img} />
        })}
      
      </Slider>
    </section>
  );
}

export default HeroBanner;
