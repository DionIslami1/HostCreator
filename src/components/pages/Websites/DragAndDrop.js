import React from 'react'
import './styles/dragAndDrop.scss';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from "react-intl";

const DragAndDrop = () => {
    AOS.init();
    return (
        <div className="dragand-drop">
            <div className="dragand-drop-img" data-aos="fade-down" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200' />
            <div className="dragand-drop-back" />
            <div className="dragand-drop-content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay='500' data-aos-offset='200'>
                <h6><FormattedMessage id="Websites-DragAndDrop-title" /></h6>
                <p><FormattedMessage id="Websites-DragAndDrop-desc" /></p>
                <Link to='/' className="dragand-drop-btn">
                    <FormattedMessage id="Websites-DragAndDrop-link" />
                </Link>

            </div>
        </div>
    )
}

export default DragAndDrop
