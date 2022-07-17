import React from 'react'
import './styles/getBeautiful.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import { FormattedMessage } from "react-intl";
import 'aos/dist/aos.css';

const GetBeautiful = () => {
    AOS.init();
    return (
        <div className="get-beautiful">
            <div className="get-beautiful-back" />
            <div className="get-beautiful-img" data-aos="flip-up" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200' />
            <div className="get-beautiful-content" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                <h6><FormattedMessage id="Portfolio-GetBeautiful-title" /></h6>
                <p><FormattedMessage id="Portfolio-GetBeautiful-desc" /></p>
                <Link to='/' className="get-beautiful-btn">
                    <FormattedMessage id="Portfolio-GetBeautiful-link" />
                </Link>

            </div>
        </div>
    )
}

export default GetBeautiful
