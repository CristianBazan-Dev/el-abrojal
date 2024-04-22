import React, { useRef } from 'react';
import { categories } from "../../../api/Categories";
import Slider from 'react-slick';
import Cards from "../cards/Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productsCarousel.css"


function ProductsCarousel(props) {
  let sliderRef = useRef(null);
    
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
      }


    return (
       
        <Slider {...settings} className='products-slider'>
          {categories.map((data, index) => {
            return (
              <Cards
                link={`/categories/${data.id}`}
                title={data.category}
                img={data.categoryImg}
                key={data.id}
              />
            );
          })}
        </Slider>
    );
}

export default ProductsCarousel;