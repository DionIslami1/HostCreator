import React from 'react'
import './styles/tryHostCreator.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from "react-intl";

const TryHostCreator = () => {
    AOS.init();
    return (
        <div className='try-hostcreator'>
            <div className='try-hostcreator-back' />
            <div className='try-hostcreator-content'>
                <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'><FormattedMessage id="App-Builder-TryHostCreator-title" /></h6>
                <div className='try-hostcreator-img' data-aos="flip-left" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200' />
                <Link to='/' className='try-hostcreator-btn' data-aos="fade-left" data-aos-duration="500" data-aos-delay='200' data-aos-offset='100'>
                    <FormattedMessage id="App-Builder-TryHostCreator-link" />
                </Link>
            </div>

        </div>
    )
}

export default TryHostCreator
