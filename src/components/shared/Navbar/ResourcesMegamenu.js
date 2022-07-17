import React from 'react'
import { Link } from 'react-router-dom'
import { ResourcesData } from './NavData'
import { FormattedMessage } from "react-intl";

const ResourcesMegamenu = () => {
    return (
        <div className="resouces-megamenu">
            <div className='resouces-title' ><h6><FormattedMessage id='resouces-megamenu-title' /></h6></div>
            {ResourcesData.map((props) => {
                return (
                    <Link to={props.to} className="resources-link">
                        <div className={`resources-back ${props.css}`} >
                            <div className="resources-blank">
                                <div className={`resource-img ${props.transform}`} style={{ content: `url(${props.icon})` }}></div>
                            </div>
                        </div>
                        <div className="resources-block">
                            <h6>{props.title}</h6>
                            <p>{props.description}</p>
                        </div>

                    </Link>
                )
            })}
        </div>
    )
}

export default ResourcesMegamenu
