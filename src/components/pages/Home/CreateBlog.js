import React from 'react'
import { Link } from 'react-router-dom'
import './styles/createBlog.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CreateBlog = () => {
    AOS.init();
    return (
        <div className="createblog">
            <div className="createblog-back" />
            <div className="createblog-content" data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <h6><FormattedMessage id="createblog-title" /></h6>
                <p><FormattedMessage id="createblog-description" /></p>
                <Link to='/'><FormattedMessage id="createblog-link" /> <BsArrowRightShort /></Link>
            </div>
            <div className="createblog-img" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000" />

        </div>
    )
}

export default CreateBlog
