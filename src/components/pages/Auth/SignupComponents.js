import React from 'react'
import './styles/SignupComponents.scss'
import Carousel from 'react-elastic-carousel'
import SignupForm from './SignupForm'
import { SignupSilderData, SignupData } from './AuthData'
import { FormattedMessage } from "react-intl";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 900, itemsToShow: 1 },
];

const SignupComponents = () => {
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
        <div className="SignupComponents">
            <div className="SignupComponents-container">
                <div className="line" />
                <h6><FormattedMessage id="sign-up-left-title" /></h6>
                <p><FormattedMessage id="sign-up-left-desc" /></p>
                <div className="SignupComponents-back-img1" />
                <div className="SignupComponents-back-img2" />
                <Carousel className="signup-slider"
                    breakPoints={breakPoints}
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    disableArrowsOnEnd={false}
                >
                    {SignupSilderData.map((props) => {
                        return (
                            <div className='signup-slider-item'>
                                <div className={props.img} />
                            </div>
                        )
                    })}

                </Carousel >

                {SignupData.map((props) => {
                    return (
                        <div className={props.class}>
                            <div className={props.css}>
                                <div className={props.img} />
                                <div className={props.content}>
                                    <h6>{props.title}</h6>
                                    <p>{props.desc}</p>
                                </div>
                            </div>
                            <div className={props.back} />
                        </div>
                    )
                })}
            </div>

            <SignupForm />


        </div>
    )
}

export default SignupComponents
