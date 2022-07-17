import React from 'react'
import './slider4.scss';
import Carousel from 'react-elastic-carousel'
import { Slider4Data } from './Slider4Data'

const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
];

const Slider4 = () => {
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
        <div className="slider4">
            <div className="img-slider4-phone" />
            <Carousel className="slider4-content"
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                {Slider4Data.map((props) => {
                    return (
                        <div className='slider4-item'>
                            <div className="slider-img" style={{ content: `url(${props.img})` }}>

                            </div>
                        </div>
                    )
                })}
            </Carousel >

        </div>
    )
}

export default Slider4
