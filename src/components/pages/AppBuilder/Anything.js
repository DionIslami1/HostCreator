import React from 'react'
import './styles/anything.scss'
import { AnythingData } from './AppBuilderData'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from "react-intl";

const Anything = () => {
    AOS.init();
    return (
        <div className="anything">
            <div className="anything-title">
                <h6 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'><FormattedMessage id="App-Builder-Anything" /></h6>
            </div>
            <div className="anything-content">
                {AnythingData.map((props) => {
                    return (
                        <div className="anything-item" data-aos="flip-left" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                            <div className='anything-img' style={{ content: `url(${props.img})` }} />
                            <h6>{props.title}</h6>
                            <p>{props.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Anything
