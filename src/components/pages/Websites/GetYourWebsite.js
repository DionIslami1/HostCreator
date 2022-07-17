import React from 'react'
import './styles/getYourWebsite.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from "react-intl";

const GetYourWebsite = () => {
    AOS.init();
    return (
        <div className="getyour-website">
            <div className="getyour-website-content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                <h6><FormattedMessage id="Websites-GetYourWebsite-title" /></h6>
                <p><FormattedMessage id="Websites-GetYourWebsite-desc" /></p>
                <Link to='/' className="getyour-website-btn">
                    <FormattedMessage id="Websites-GetYourWebsite-link" />
                </Link>
            </div>
            <div className="getyour-website-img" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200' />
            <div className="getyour-website-back" />

        </div>
    )
}

export default GetYourWebsite
