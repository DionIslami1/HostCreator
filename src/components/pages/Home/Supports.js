import React from 'react'
import './styles/supports.scss'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Supports = () => {
    AOS.init();
    return (
        <div className='supports'>
            <div className='supports-content' data-aos="zoom-out-left" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200'>
                <h6><FormattedMessage id="supports-tittle" /></h6>
                <p><FormattedMessage id="supports-desc" /></p>
            </div>
            <div className="supports-back-img1" />
            <div className="supports-back-img2" />
            <div className="supports-Main-Img" data-aos="zoom-out-right" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200'>
                <div className="supports-Mainimg1" />
                <div className="supports-Mainimg2" />
                <div className="supports-Mainimg3" />
            </div>
        </div >
    )
}

export default Supports
