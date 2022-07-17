import React from 'react'
import './styles/banner.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 2500,
    };
    return (
        <div className="banner">
            <Slider {...settings}>
                <div className="slider">
                    <div className="banner-img" />
                </div>
                <div className="slider">
                    <div className="banner-img" />
                </div>
                <div className="slider">
                    <div className="banner-img" />
                </div>
                <div className="slider">
                    <div className="banner-img" />
                </div>
                <div className="slider">
                    <div className="banner-img" />
                </div>
                <div className="slider">
                    <div className="banner-img" />
                </div>
            </Slider>
        </div>
    )
}

export default Banner
