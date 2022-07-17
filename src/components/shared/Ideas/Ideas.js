import React from 'react'
import './ideas.scss'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ideas = () => {
    AOS.init();
    return (
        <div className="ideas">
            <div className="ideas-container">
                <div className="ideas-container-content">
                    <div className="ideas-content" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay='500' data-aos-offset='200'>
                        <div className="ideas-content1">
                            <div className="ideas-content-img1" />
                            <p><FormattedMessage id="ideas-desc1" /></p>
                        </div>
                        <div className="ideas-content2">
                            <div className="ideas-content-img1" />
                            <p><FormattedMessage id="ideas-desc2" /></p>
                        </div>
                        <div className="ideas-content3">
                            <div className="ideas-content-img1" />
                            <p><FormattedMessage id="ideas-desc3" /></p>
                        </div>
                    </div>
                    <div className="ideas-main-img" data-aos="flip-left" data-aos-duration="1500" data-aos-delay='500' data-aos-offset='200' />
                </div>
                <div className="ideas-back-img1" />
                <div className="ideas-back-img2" />

            </div>

        </div>
    )
}

export default Ideas
