import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/advanced.scss'

const Advanced = () => {
    AOS.init();
    return (
        <div className='advanced'>
            <div className='advanced-mainimg'>
                <div className='advanced-back-img' data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay='200' />
                <div className='advanced-img' data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay='200' />
            </div>
            <div className='advanced-back' />
            <div className='advanced-content' data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200'>
                <Link><div className='advanced-logoImg' /><span className='advanced-logoName' >HostAI</span></Link>
                <h6><FormattedMessage id="advanced-title" /></h6>
                <p><FormattedMessage id="advanced-description" /></p>
                <Link><FormattedMessage id="advanced-link" /> <BsArrowRightShort /></Link>
            </div>

        </div>
    )
}

export default Advanced
