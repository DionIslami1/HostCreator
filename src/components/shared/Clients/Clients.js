import React from 'react'
import './clients.scss'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import Carousel from 'react-elastic-carousel'
import { ClientsData } from './ClientsData'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 900, itemsToShow: 1 },
];

const Clients = () => {
    AOS.init();

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
        <div className="clients">
            <div className="clients-back" />
            <div className="container">
                <div className="content">
                    <h6><FormattedMessage id="clients-title" /><BsFillSuitHeartFill /></h6>
                    <p><FormattedMessage id="clients-description" /></p>
                </div>

                <Carousel className="slider1"

                    breakPoints={breakPoints}
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    disableArrowsOnEnd={false}
                >
                    {ClientsData.map((props) => {
                        return (
                            <div className='slider1-item' >
                                <h6>{props.name}</h6>
                                <p>{props.desc}</p>
                                <div className='slider1-quotes' />
                                <div className='slider1-stars' />
                            </div>
                        )
                    })}
                </Carousel >
            </div>
        </div>
    )
}

export default Clients
