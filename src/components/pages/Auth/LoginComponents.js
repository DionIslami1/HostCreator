import React from 'react'
import './styles/LoginComponents.scss'
import Carousel from 'react-elastic-carousel'
import LoginForm from './LoginForm'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { LoginSilderData, LoginData } from './AuthData'
import { FormattedMessage } from "react-intl";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 900, itemsToShow: 1 },
];

const LoginComponents = () => {
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
        <div className="loginComponents">
            <div className="loginComponents-container">
                <div className="loginComponents-container-back" />
                <div className="line" />
                <h6><FormattedMessage id="log-in-left-title" /> <BsFillSuitHeartFill /></h6>
                <p><FormattedMessage id="log-in-left-desc" /></p>
                <div className="loginComponents-back-img1" />
                <div className="loginComponents-back-img2" />
                <Carousel className="login-slider"
                    breakPoints={breakPoints}
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    disableArrowsOnEnd={false}
                >
                    {LoginSilderData.map((props) => {
                        return (
                            <div className='login-slider-item'>
                                <div className={props.img} />
                            </div>
                        )
                    })}
                </Carousel >


                {LoginData.map((props) => {
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
            <LoginForm />
        </div>
    )
}

export default LoginComponents
