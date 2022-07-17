import React from 'react'
import './slider3.scss';
import Carousel from 'react-elastic-carousel'
import { Slider3data } from './Slider3Data'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
];

const Slider3 = () => {
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
        <div className="slider3">
            <div className="img-slider3-laptop" />
            <Carousel className="slider3-content"
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                {Slider3data.map((props) => {
                    return (
                        <div className='slider3-item'>
                            <div className="slider-img" style={{ content: `url(${props.img})` }}>

                            </div>
                        </div>
                    )
                })}

            </Carousel >

        </div>
    )
}

export default Slider3
