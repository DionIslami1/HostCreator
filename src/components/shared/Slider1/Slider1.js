import React from 'react'
import './slider1.scss';
import Carousel from 'react-elastic-carousel'
import { Slider1Data } from './Slider1Data'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
];

const Slider1 = () => {
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
        <div className="slider1">
            <div className="img-slider1-laptop" />
            <Carousel className="slider1-content"
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                {Slider1Data.map((props) => {
                    return (
                        <div className='slider1-item'>
                            <div className="slider-img" style={{ content: `url(${props.img})` }}>

                            </div>
                        </div>
                    )
                })}
            </Carousel >
        </div>
    )
}

export default Slider1
