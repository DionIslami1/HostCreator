import React, { useState } from 'react'
import './sidebar.scss';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
// import { FaProductHunt } from 'react-icons/fa'
import { MdOutlineFeaturedPlayList, MdOutlinePriceChange } from 'react-icons/md'
// import { GrResources } from 'react-icons/gr'
import { RiProductHuntLine } from 'react-icons/ri'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { NavData, FeaturesData, ResourcesData } from '../../Navbar/NavData';
import { FormattedMessage } from "react-intl";


const Sidebar = (props) => {

    const [submenu, SetSubmenu] = useState(false);

    const openSubmenu = () => {
        SetSubmenu(!submenu);
    }

    const [feature, SetFeature] = useState(false);

    const openfeature = () => {
        SetFeature(!feature);
    }
    const [resources, SetResources] = useState(false);

    const openResources = () => {
        SetResources(!resources);
    }

    return (
        <div className='nav-sidebar'>
            <div className="container-logo">
                <Link to='/'>
                    <div className="logo-icon"></div>
                    <h6>HostCreator</h6>
                </Link>


                <button>
                    <AiOutlineClose onClick={props.close} />
                </button>
            </div>
            <div className="sidebar-link" >
                <Link to='/'>
                    <RiProductHuntLine /> <FormattedMessage id="nav-category1" />
                </Link>
                <span onClick={openSubmenu}>
                    {submenu ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
            </div>

            {submenu ? <div className="sidebar-submenu">
                {NavData.map((props) => {
                    return (<Link to={props.to}>
                        <div className={`img-back ${props.css}`}>
                            <div className={`nav-img ${props.icon_height}`} style={{ content: `url(${props.icon})` }}
                            >
                            </div>
                        </div>
                        <div className='submenu-block'>{props.title}</div>
                    </Link>
                    )
                })}
            </div> : null}

            <div className="sidebar-link" >
                <Link to='/'>
                    <MdOutlineFeaturedPlayList />  <FormattedMessage id='nav-category2' />
                </Link>
                <span onClick={openfeature}>
                    {feature ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
            </div>

            {feature ? <div className="sidebar-submenu">
                {FeaturesData.map((props) => {
                    return (<Link to={props.to}>
                        <div className={`features-back ${props.css}`}>
                            <div className="features-img" style={{ content: `url(${props.icon})` }}>
                            </div>
                        </div>
                        <div className='submenu-block'>{props.title}</div>
                    </Link>
                    )
                })}
            </div> : null}

            <div className="sidebar-link" >
                <Link to='/'>
                    <AiOutlineFileSearch />  <FormattedMessage id='nav-category3' />
                </Link>
                <span onClick={openResources}>
                    {resources ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
            </div>

            {resources ? <div className="sidebar-submenu">
                {ResourcesData.map((props) => {
                    return (<Link to={props.to}>
                        <div className={`resources-back ${props.css}`} >
                            <div className="resources-blank">
                                <div className={`resource-img ${props.transform}`} style={{ content: `url(${props.icon})` }}></div>
                            </div>
                        </div>
                        <div className='submenu-block'>{props.title}</div>
                    </Link>
                    )
                })}
            </div> : null}

            <div className="sidebar-link" >
                <Link to='/'>
                    <MdOutlinePriceChange />  <FormattedMessage id='nav-category4' />
                </Link>
            </div>
            <div className="auths">
                <Link className="login" to='/Login'>
                    <FormattedMessage id='nav-login' />
                </Link>
                <Link to='/Signup' >
                    <FormattedMessage id='nav-signup' />
                </Link>

            </div>


        </div>
    )
}

export default Sidebar
