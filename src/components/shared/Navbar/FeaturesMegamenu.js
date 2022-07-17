import React from 'react'
import { FeaturesData } from './NavData'
import { Link } from 'react-router-dom'
import { FormattedMessage } from "react-intl";
const FeaturesMegamenu = () => {
    return (
        <div className='features-megamenu'>
            <div className='features-title' ><h6> <FormattedMessage id="features-megamenu-title" /></h6></div>
            {FeaturesData.map((props) => {
                return (
                    <Link to={props.to} className='features-link'>
                        <div className={`features-back ${props.css}`}>
                            <div className="features-img" style={{ content: `url(${props.icon})` }}>
                            </div>
                        </div>
                        <div className='features-block'>
                            <h6>{props.title}</h6>
                            <p>{props.description}</p>
                        </div>
                    </Link>
                )
            })}

            <div className='features-bottom-link'>
                <Link to='/' className='features-bottom'><FormattedMessage id="features-megamenu-bottom" /></Link>
            </div>

        </div>
    )
}

export default FeaturesMegamenu
