import React from 'react'
import './styles/threeSteps.scss'
import { ThreeStepsData } from './WebsiteData'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from "react-intl";

const ThreeSteps = () => {
    AOS.init();
    return (
        <div className="threesteps">
            <div className="threesteps-title" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                <h6><FormattedMessage id="Websites-ThreeSteps-title" /></h6>
            </div>
            <div className="threesteps-content">

                {ThreeStepsData.map((props) => {
                    return (
                        <div className="threesteps-item" data-aos="flip-right" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                            <div className="threesteps-img" style={{ content: `url(${props.img})` }} />
                            <h6>{props.title}</h6>
                            <p>{props.desc}
                            </p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ThreeSteps
