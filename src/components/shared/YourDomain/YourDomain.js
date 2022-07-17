import React from 'react'
import './yourDomain.scss'
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import { YourDomainData } from './YourDomainData'
import AOS from 'aos';
import 'aos/dist/aos.css';

const YourDomain = () => {
    AOS.init();
    return (
        <div className="yourdomain">
            <div className="yourdomain-container" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay='500' data-aos-offset='200'>
                {YourDomainData.map((props) => {
                    return (
                        <div className={props.css}>
                            <div className={props.img} />
                            <div className={props.back} />

                            <h6>{props.title}</h6>
                            <p>{props.desc}</p>
                            <Link to='/'>{props.link}<BsArrowRightShort /></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default YourDomain
