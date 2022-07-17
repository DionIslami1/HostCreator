import React, { useState } from 'react'
import './sliders.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom'
import Slider1 from '../Slider1/Slider1.js'
import Slider3 from '../Slider3/Slider3.js'
import Slider4 from '../Slider4/Slider4.js'
import Slider5 from '../Slider5/Slider5.js'
import { slidersDataName } from './SlidersData'
import { FormattedMessage } from "react-intl";

const Sliders = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div className="sliders">

            <h6><FormattedMessage id="Share-Sliders-title" /></h6>

            <Tabs className="tabs">
                <TabList className="slider-tablist">
                    {slidersDataName.map((props) => {
                        return (
                            <Tab key={props.id} className={toggleState === props.id ? "slider-tab active-slider-tab" : "slider-tab"} onClick={() => toggleTab(props.id)}>
                                <p>{props.name}</p>
                            </Tab>
                        )
                    })}

                </TabList>
                <TabPanel >
                    <Slider3 />
                </TabPanel>
                <TabPanel >
                    <Slider4 />
                </TabPanel>
                <TabPanel >
                    <Slider1 />
                </TabPanel>
                <TabPanel >
                    <Slider3 />
                </TabPanel>
                <TabPanel >
                    <Slider5 />
                </TabPanel>
            </Tabs>
            <Link to='/' className='slider-btn'><FormattedMessage id="Share-Sliders-link" /></Link>
        </div>

    )
}

export default Sliders
