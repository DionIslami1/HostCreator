import React from 'react'
import './styles/moreThan.scss'
import { MoreThanData } from './WebsiteData'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from "react-intl";

const MoreThan = () => {
    AOS.init();
    return (
        <div className="more-than">

            <div className="more-than-left" data-aos="flip-up" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                {MoreThanData.map((props) => {
                    return (
                        <div className="left-content">
                            <div className="left-img" style={{ content: `url(${props.img})` }} />
                            <h6>{props.title}</h6>
                            <p>{props.desc}</p>
                        </div>
                    )
                })
                }

            </div>
            <div className="more-than-content">
                <div className="contetn-title" data-aos="fade-right" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                    <h6><FormattedMessage id="Websites-MoreThan-title" /></h6>
                    <p><FormattedMessage id="Websites-MoreThan-desc" /></p>
                </div>
                <div className="contetn-mainimg" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200' />
                <div className="more-than-back" />

            </div>
        </div>
    )
}

export default MoreThan
