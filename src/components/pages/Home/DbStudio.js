import React from 'react'
import { Link } from 'react-router-dom'
import './styles/dbStudio.scss'
import { DbStudioData } from './HomeData'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const DbStudio = () => {
    AOS.init();
    return (
        <div className="dbstudio">
            <div className="dbstudio-content">
                <div className="dbstudio-img" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" />
                <div className="dbstudio-plot" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200'>
                    <Link to='/'>#HostLogo</Link>
                    <h6><FormattedMessage id="advanced-title" /></h6>
                    <p><FormattedMessage id="advanced-description" /></p>
                </div>

            </div>
            <div className="dbstudio-article" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay='200' data-aos-offset='200'>
                <div className="dbstudio-article-back" />
                {DbStudioData.map((props) => {
                    return (
                        <div className="dbstudio-article-content">
                            <h6>{props.title}</h6>
                            <p>{props.description}</p>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default DbStudio
