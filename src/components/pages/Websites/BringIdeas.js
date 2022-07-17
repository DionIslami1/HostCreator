import React from 'react'
import { Link } from 'react-router-dom'
import './styles/bringIdeas.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from "react-intl";

const BringIdeas = () => {
    AOS.init();
    return (
        <div className="bring-ideas">
            <div className="bring-ideas-img" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200' />
            <div className="bring-ideas-back" />
            <div className="bring-ideas-content" data-aos="fade-left" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                <h6><FormattedMessage id="Websites-BringIdeas-title" /></h6>
                <p><FormattedMessage id="Websites-BringIdeas-desc" /></p>
                <Link to='/' className="bring-ideas-btn">
                    <FormattedMessage id="Websites-BringIdeas-link" />
                </Link>

            </div>

        </div>
    )
}

export default BringIdeas
