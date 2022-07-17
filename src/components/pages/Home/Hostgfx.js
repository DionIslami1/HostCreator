import React from 'react'
import './styles/hostgfx.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hostgfx = () => {
    AOS.init();
    return (
        <div className="hostgfx">
            <div className="hostgfx-back-img" />
            <div className="hostgfx-back">
                <div className="hostgfx-content" data-aos="flip-right" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200'>
                    <h6>HOSTGFX</h6>
                    <p><FormattedMessage id="Hostgfx-desc" /></p>
                    <Link to='/' className="hostgfx-btn">
                        <p><FormattedMessage id="Hostgfx-link" /></p>
                    </Link>

                </div>
                <div className="hostgfx-main-img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200' />
            </div>
        </div>
    )
}

export default Hostgfx
