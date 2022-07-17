import React from 'react'
import './styles/banner.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from "react-intl";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h6><FormattedMessage id="Portfolio-Banner-title" /></h6>
                <p><FormattedMessage id="Portfolio-Banner-desc" /></p>
                <Link to='/' className='banner-btn'>
                    <FormattedMessage id="Portfolio-Banner-link" />
                </Link>
            </div>
            <div className="banner-img" />
        </div>
    )
}

export default Banner
