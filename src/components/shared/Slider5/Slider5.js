import React from 'react'
import './slider5.scss'
import Carousel from 'react-elastic-carousel'
import { Slider5Data } from './Slider5Data'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
];



const Slider5 = () => {
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
        <div className='slider5'>
            <div className="img-slider5-laptop" />
            <Carousel className="slider5-content"
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                {Slider5Data.map((props) => {
                    return (
                        <div className='slider5-item'>
                            <div className="slider-img" style={{ content: `url(${props.img})` }}>

                            </div>
                        </div>
                    )
                })}
            </Carousel >

        </div>
    )
}

export default Slider5
