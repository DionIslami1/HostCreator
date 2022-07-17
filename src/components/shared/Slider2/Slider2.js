import React from 'react'
import './slider2.scss'
import { Slider2Data } from './Slider2Data'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { FormattedMessage } from "react-intl";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 2 },
    { width: 650, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
];

const Slider2 = () => {
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carouselRef.current.goTo('single-slide'.length);
        }
    };



    return (
        <div className="slider2">
            <h1><FormattedMessage id="slider2-tittle" /></h1>
            <p><FormattedMessage id="slider2-desc" /></p>
            <Carousel className="slider"
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
                infiniteLoop={true}
            >
                {Slider2Data.map((props) => {
                    return (
                        <div className="slider-item">
                            <div className="img-cont">
                                <div className="img" style={{ content: `url(${props.img})` }}></div>
                            </div>
                            <Link to={props.to}>{props.link} <HiArrowRight /></Link>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Slider2
