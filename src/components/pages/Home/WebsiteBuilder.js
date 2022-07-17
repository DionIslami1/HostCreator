import React from 'react'
import { Link } from 'react-router-dom'
import './styles/websitebuilder.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebsiteBuilder = () => {
    AOS.init();
    return (
        <div className='WebsiteBuilder'>
            <div className='web_img' data-aos="fade-left"
                data-aos-duration="1000" data-aos-delay='500'>
            </div>
            <div className='WebsiteBuilder-back'>
                <div className='WebsiteBuilder-content' data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay='500'>
                    <h6><FormattedMessage id="WebsiteBuilder-tittle" /></h6>
                    <p><FormattedMessage id="WebsiteBuilder-desc" /></p>
                    <Link to='/Websites'><FormattedMessage id="WebsiteBuilder-link" /> <BsArrowRightShort /></Link>
                </div>
            </div>



        </div>
    )
}

export default WebsiteBuilder
