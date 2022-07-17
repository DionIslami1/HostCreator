import React from 'react'
import './styles/createPortfolio.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import { FormattedMessage } from "react-intl";
import 'aos/dist/aos.css';

const CreatePortfolio = () => {
    AOS.init();
    return (
        <div className="create-portfolio">
            <div className="create-portfolio-content" data-aos="fade-down" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                <h6><FormattedMessage id="Portfolio-CreatePortfolio-title" /></h6>
                <p><FormattedMessage id="Portfolio-CreatePortfolio-desc" /></p>
                <Link to='/' className='create-portfolio-btn'>
                    <FormattedMessage id="Portfolio-CreatePortfolio-link" />
                </Link>
            </div>
            <div className="create-portfolio-back" />
            <div className="create-portfolio-img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200' />
        </div>
    )
}

export default CreatePortfolio
