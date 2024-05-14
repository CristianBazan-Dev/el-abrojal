import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./heroBanner.css";

function HeroBanner(props) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const images = [];
    const loadImages = async () => {
      const promises = props.useLocalImages ? localImgs.map(img => loadImage(img)) : imgs.map(img => loadImage(img));
      await Promise.all(promises);
      setImagesLoaded(true);
    };

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = () => resolve();
        image.onerror = () => reject();
        images.push(image);
      });
    };

    loadImages();

    return () => {
      images.forEach(image => URL.revokeObjectURL(image.src));
    };
  }, [props.useLocalImages]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 1000,
  };

  const imgs = ["https://res.cloudinary.com/dz6lrvj7u/image/upload/v1715606408/Hero/banner/hero-1.avif", "https://res.cloudinary.com/dz6lrvj7u/image/upload/v1715607314/Hero/banner/hero-2.avif", "https://res.cloudinary.com/dz6lrvj7u/image/upload/v1715606647/Hero/banner/hero-3.avif", "https://res.cloudinary.com/dz6lrvj7u/image/upload/v1715606786/Hero/banner/hero-4.avif"];

  const localUrl = '/assets/banner/';

  const localImgs = [`${localUrl}/hero-1.avif`, `${localUrl}/hero-2.avif`, `${localUrl}/hero-3.avif`, `${localUrl}/hero-4.avif`];

  if (!imagesLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <section className="hero-banner">
      <Slider {...settings} ref={sliderRef}>
        {props.useLocalImages ? localImgs.map((img, index) => <img key={index} src={img} alt={`hero-${index + 1}`} />) : imgs.map((img, index) => <img key={index} src={img} alt={`hero-${index + 1}`} />)}
      </Slider>
    </section>
  );
}

export default HeroBanner;
