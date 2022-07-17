import React from 'react'
import './styles/onlineStore.scss'
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import { OnlineStoreData } from './HomeData'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OnlineStore = () => {
    AOS.init();
    return (
        <div className="onlinestore">
            <div className="onlinestore-back" />
            <div className="onlinestore-content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200'>
                <div className="onlinestore-desc">
                    <h6><FormattedMessage id="onlinestore-tittle" /></h6>
                    <p><FormattedMessage id="onlinestore-desc" /></p>
                </div>
                <div className="onlinestore-prod">
                    {OnlineStoreData.map((props) => {
                        return (
                            <div className={props.title}>
                                <div className={`onlinestore-backcolor ${props.css}`}>
                                    <div className="onlinestore-blank">
                                        <div className='onlinestore-prod-img' style={{ content: `url(${props.img})` }} />
                                    </div>
                                </div>
                                <p>{props.description}</p>
                            </div>
                        )
                    })}
                </div>
                <span className="onlinestore-link"><Link to="/"><FormattedMessage id="onlinestore-link" /> <BsArrowRightShort /></Link></span>
            </div>
            <div className="onlinestore-Main-Img" data-aos="fade-left" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200' />
        </div>
    )
}

export default OnlineStore
