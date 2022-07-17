import React from 'react'
import { Link } from 'react-router-dom'
import './styles/vizualize.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Vizualize = () => {
    AOS.init();
    return (
        <div className="vizualize">
            <div className="vizualize-back" >
            </div>
            <div className="vizualize-back-content" >
                <div className="vizualize-back-img" />
                <h6><FormattedMessage id="vizualize-tittle" /></h6>
                <p><FormattedMessage id="vizualize-desc" /></p>
                <Link to='/'><FormattedMessage id="vizualize-link" /><BsArrowRightShort /></Link>
            </div>
            <div className="vizualize-img" data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" />

        </div>
    )
}

export default Vizualize
