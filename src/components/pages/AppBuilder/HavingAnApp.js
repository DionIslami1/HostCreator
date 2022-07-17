import React from 'react'
import './styles/havingAnApp.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from "react-intl";

const HavingAnApp = () => {
    AOS.init();
    return (
        <div className="havingan-app">
            <div className="havingan-app-img" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200' />
            <div className="havingan-app-back" />
            <div className="havingan-app-content">
                <h6><FormattedMessage id="App-Builder-HavingAnApp-title" /></h6>
                <p><FormattedMessage id="App-Builder-HavingAnApp-desc" /></p>
                <Link to='/' className="havingan-app-btn">
                    <FormattedMessage id="App-Builder-HavingAnApp-link" />
                </Link>
            </div>

        </div>
    )
}

export default HavingAnApp
