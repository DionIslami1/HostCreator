import React from 'react'
import { Link } from 'react-router-dom'
import './styles/banner.scss'
import { FormattedMessage } from "react-intl";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h6><FormattedMessage id="App-Builder-Banner-title" /></h6>
                <p><FormattedMessage id="App-Builder-Banner-desc" /> </p>
                <Link to="/" className="banner-btn" >
                    <FormattedMessage id="App-Builder-Banner-link" />
                </Link>
            </div>
            <div className="banner-main-img" />
            <div className="banner-back" />
        </div>
    )
}

export default Banner
