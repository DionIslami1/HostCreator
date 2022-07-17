import React, { useState } from 'react'
import './styles/brand.scss';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { FormattedMessage } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { brandTabName, brandTabPanelName } from './HomeData'


const Brand = () => {
    AOS.init();
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="brand-home">
            <Tabs className="brand">
                <div className="brand-back" data-aos="fade-left" data-aos-duration="1000" data-aos-delay='200'>
                    <div className="brand-back_content">
                        <h6><FormattedMessage id="brand-title" /></h6>
                        <p> <FormattedMessage id="brand-description" /></p>
                    </div>
                    <div >
                        <TabList className="brand-back-btn">
                            <p><FormattedMessage id="brand-back-btn" /></p>
                            <div className="brand-buttons">
                                {brandTabName.map((props) => {
                                    return (
                                        <Tab key={props.id} className={toggleState === props.id ? props.active : props.btn} onClick={() => toggleTab(props.id)}>
                                            <span className={props.text}><FormattedMessage id="brand-btn-text" /></span>
                                            <div className={props.btn_circle} >
                                                <div className={props.circle} />
                                            </div>
                                        </Tab>
                                    )
                                })}
                            </div>
                        </TabList>

                    </div>
                </div>

                <div className="brand-content" data-aos="fade-down" data-aos-duration="1000" data-aos-delay='200'>


                    <div className="brand-body">
                        <div className="brand-header" />
                        <div className="brand-right" >
                            {brandTabPanelName.map((props) => {
                                return (
                                    <TabPanel className={props.title}><span ><h6><FormattedMessage id="brand-btn-tittle" /></h6></span></TabPanel>
                                )
                            })}
                            <hr className="brand-hr1" />
                            <hr className="brand-hr2" />
                            <hr className="brand-hr3" />
                            <hr className="brand-hr4" />
                            <hr className="brand-hr5" />
                            <div className="brand-button" />
                        </div>
                        <div className="brand-rectangle" >
                            <div className="brand-img" />
                        </div>

                    </div>
                </div>
            </Tabs>
            <div className="brand-back-img" />
        </div>
    )
}

export default Brand
