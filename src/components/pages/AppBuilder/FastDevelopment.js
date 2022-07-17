import React from 'react'
import './styles/fastDevelopment.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from "react-intl";

const FastDevelopment = () => {
    AOS.init();
    return (
        <div className="fast-development">
            <div className="fast-development-back" />
            <div className="fast-development-img" data-aos="fade-right" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200' />
            <div className="fast-development-content" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                <h6><FormattedMessage id="App-Builder-FastDevelopment-title" /></h6>
                <p><FormattedMessage id="App-Builder-FastDevelopment-desc" /></p>
                <Link to='/' className="fast-development-btn" >
                    <FormattedMessage id="App-Builder-FastDevelopment-link" />
                </Link>
            </div>
        </div>
    )
}

export default FastDevelopment
