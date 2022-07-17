import React from 'react'
import { Link } from 'react-router-dom'
import './styles/proffesionally.scss'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Proffesionally = () => {
    AOS.init();
    return (
        <div className="proffesionally">
            <div className="proffesionally-content" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200'>
                <Link>#MadeWithHostUI</Link>
                <h6><FormattedMessage id="proffesionally-tittle" /></h6>
                <p><FormattedMessage id="proffesionally-desc" /></p>
            </div>
            <div className="proffesionally-img" data-aos="flip-left" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200' />

            <Link to='/Templates' className="proffesionally-btn" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200'>
                <p><FormattedMessage id="proffesionally-link" /></p>
            </Link>
        </div>
    )
}

export default Proffesionally
