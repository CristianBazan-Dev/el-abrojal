import React from 'react';
import { categories } from "../../../api/Categories";
import Slider from 'react-slick';
import Cards from "../cards/Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productsCarousel.css"


function ProductsCarousel(props) {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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