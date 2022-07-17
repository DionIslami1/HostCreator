import React from 'react'
import './styles/onePlatform.scss';
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OnePlatform = () => {
    AOS.init();
    return (
        <div className="oneplatform">
            <div className="oneplatform-back" />
            <div className="oneplatform-content">
                <div className="oneplatform-img" data-aos="flip-left" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200' />
                <div className="oneplatform-content-plot" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200'>
                    <h6><FormattedMessage id="oneplatform-tittle" /></h6>
                    <p><FormattedMessage id="oneplatform-desc" /></p>
                    <div className="oneplatform-content-products" >
                        <p><FormattedMessage id="oneplatform-name1" /></p>
                        <p><FormattedMessage id="oneplatform-name2" /></p>
                        <p><FormattedMessage id="oneplatform-name3" /></p>
                        <p><FormattedMessage id="oneplatform-name4" /></p>
                        <p><FormattedMessage id="oneplatform-name5" /></p>
                        <p><FormattedMessage id="oneplatform-name6" /></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OnePlatform
