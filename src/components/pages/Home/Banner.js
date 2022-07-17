import React, { useState } from 'react'
import './styles/banner.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FormattedMessage } from "react-intl";
import { BannerDataTitle, BannerDataSliders } from './HomeData'

const Banner = () => {

    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs Tabs className='banner' selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <h6><FormattedMessage id="banner-title" /> <span className='tabpanel'> {tabIndex === 0 ? <FormattedMessage id="banner-title1-span1" /> : ''}
                {tabIndex === 1 ? <FormattedMessage id="banner-title1-span2" /> : ''}
                {tabIndex === 2 ? <FormattedMessage id="banner-title1-span3" /> : ''}
                {tabIndex === 3 ? <FormattedMessage id="banner-title1-span4" /> : ''}
                {tabIndex === 4 ? <FormattedMessage id="banner-title1-span5" /> : ''}
            </span></h6>
            <p><FormattedMessage id="banner-description" /></p>
            <div className='tabs'>
                <TabList className='banner-links'>
                    {BannerDataTitle.map((props) => {
                        return (
                            <Tab key={props.id} className={toggleState === props.id ? "banner-link active-banner-link" : "banner-link"} onClick={() => toggleTab(props.id)}>
                                <p>{props.title}</p>
                            </Tab>
                        )
                    })}
                </TabList>
                {BannerDataSliders.map((props) => {
                    return (
                        <TabPanel className='banner-tabpanel'>
                            {props.slider}
                            <div className='tabpane-back' />
                        </TabPanel>
                    )
                })}
            </div>
        </Tabs >
    )
}

export default Banner
