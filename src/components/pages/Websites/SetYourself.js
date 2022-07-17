import React from 'react'
import './styles/setYourself.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from "react-intl";

const SetYourself = () => {
    AOS.init();
    return (
        <div className="setyourself">
            <div className="setyourself-content" data-aos="fade-right" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                <h6><FormattedMessage id="Websites-SetYourself-title" /></h6>
                <p><FormattedMessage id="Websites-SetYourself-desc" /></p>
                <Link to='/' className='setyourself-btn'>
                    <FormattedMessage id="Websites-SetYourself-link" />
                </Link>
            </div>
            <div className="setyourself-img" data-aos="fade-left" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200' />
            <div className="setyourself-back" />
        </div>
    )
}

export default SetYourself
