import React, { useState } from 'react'
import './styles/footer.scss';
import { socialMediaData, FooterData } from './FooterData'
import { Link } from 'react-router-dom'
import { FaRegEnvelope } from 'react-icons/fa'
import SelectLanguage from '../SelectLanguge/SelectLanguage';
import { FormattedMessage } from "react-intl";

const Footer = (props) => {
    const [email, setEmail] = useState('');
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-icon">
                    <div className="footer-icon-content">
                        <div className="footer-icon-img" />
                        <h6>HostCreator</h6>
                    </div>
                    <p className='p'>
                        <FormattedMessage id="footer-paragraph" />
                    </p>
                </div>
                <div className="footer-socialmedia">
                    <div className="footer-app-google">
                        <div className="footer-app-google-content">
                            <div className="footer-app-googleplay" />
                            <div>
                                <p>GET IT ON</p>
                                <h6>Google Play</h6>
                            </div>
                        </div>
                    </div>
                    <div className="footer-app-apple">
                        <div className="footer-app-apple-content">
                            <div className="footer-app-appstore" />
                            <div>
                                <p>Download on the</p>
                                <h6>App Store</h6>
                            </div>
                        </div>
                    </div>
                    {socialMediaData.map((props) => {
                        return (
                            <Link to={props.to}>
                                <div className="footer-app-social">
                                    {props.icon}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="footer-all-links">
                {FooterData.map((props) => {
                    return (

                        <div className="footer-all-links-content">
                            <h6>{props.category}</h6>
                            {props.links.map((l) => {
                                return (
                                    <Link key={l.to} to={l.to}>
                                        {l.link}
                                    </Link>
                                );
                            })}
                        </div>

                    )
                })}
            </div>
            <div className="footer-subscribe">
                <div className="footer-subscribe-content">
                    <h6> <FormattedMessage id="footer-paragraph2" defaultMessage='abc' /></h6>
                    <p><FormattedMessage id="footer-paragraph4" /></p>
                </div>
                <div className="footer-subscribe-email">
                    <FaRegEnvelope />
                    <input type="email"
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email address'
                    />
                    <button type='submit'><FormattedMessage id="footer-button" /></button>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-copyright-links">
                    <p><FormattedMessage id="footer-paragraph3" /></p>
                    <span>|</span>
                    <Link to='/'><FormattedMessage id="footer-link1" /></Link>
                    <span>|</span>
                    <Link to='/'><FormattedMessage id="footer-link2" /></Link>
                    <span>|</span>
                    <Link to='/'><FormattedMessage id="footer-link3" /></Link>
                    <span>|</span>
                    <Link to='/'><FormattedMessage id="footer-link4" /></Link>
                </div>
                <div className='select-col'>
                    <SelectLanguage
                        setLanguage={props.setLanguage}
                        language={props.language}
                    />
                </div>

            </div>

        </footer >
    )
}

export default Footer
