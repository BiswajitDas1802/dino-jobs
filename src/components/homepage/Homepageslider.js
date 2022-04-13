import React from 'react'
import Categoryslider from './Categoryslider'
import './homepageslider.css'
import slider__2items from './slideritem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageCarousel from './Sliderimages'

function Homepageslider() {

    const arr= slider__2items;
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3,
    }

    return (
        <div className="homepageslider"> 
            <div className="slider__1">
            
            <Slider {...settings}>
                {ImageCarousel.map(item=><div className="carousal__img" ><img src={item} alt="/" /></div>)}
          
            </Slider>
            </div>
            <div className="slider__2">
          <Categoryslider/>             
            </div>
        </div>
    )
}

export default Homepageslider
