import React from 'react'
import { Link } from 'react-router-dom'
import { NavData } from './NavData'
import { FormattedMessage } from "react-intl";
const ProductsMegamenu = () => {
    return (
        <div className='nav-megamenu'>
            <div className='megamenu-title' ><h6><FormattedMessage id='nav-megamenu-title' /></h6></div>
            {NavData.map((props) => {
                return (

                    <div className='menu-link ' >
                        <Link to={props.to}>
                            <div className={`img-back ${props.css}`}>
                                <div className={`nav-img ${props.icon_height}`} style={{ content: `url(${props.icon})` }}
                                >
                                </div>
                            </div>
                            <div className='block'>
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                            </div>

                        </Link>
                    </div>
                )
            })}
            <div className='megamenu-bottom-link'>
                <Link to='/' className='megamenu-bottom'><FormattedMessage id='nav-megamenu-bottom' /></Link>
            </div>
        </div>
    )
}

export default ProductsMegamenu
