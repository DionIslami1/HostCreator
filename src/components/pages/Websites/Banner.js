import React from 'react'
import { Link } from 'react-router-dom'
import './styles/banner.scss';
import { FormattedMessage } from "react-intl";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1><FormattedMessage id="Websites-Banner-title" /></h1>
                <p><FormattedMessage id="Websites-Banner-desc" /></p>
                <Link to='/' className="banner-btn">
                    <FormattedMessage id="Websites-Banner-link" />
                </Link>
            </div>
            <div className="banner-img" />
        </div>
    )
}

export default Banner
