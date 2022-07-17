import React, { useState } from 'react'
import './sidebar.scss';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { BsPlus, BsThreeDotsVertical, BsQuestionLg } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { ImArrowRight2 } from 'react-icons/im'
import { RiMoonFill } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarContentData, TeamsData, PremiumData } from './SidebarData'

const Sidebar = () => {
    const [search, setSearch] = useState('');
    const [sidebar, setSidebar] = useState(false);
    const changeSidebar = () => {
        setSidebar(!sidebar);
    }
    return (
        <div className={sidebar ? 'sidebar small-sidebar' : 'sidebar'}>
            <div className="sidebar-back" />
            <div className="sidebar-title">
                <div className="sidebar-title-content">
                    <div className="sidebar-icon" />
                    <h6>HostCreator</h6>
                </div>
                <div className="sidebar-title-circle" onClick={changeSidebar}>
                    {sidebar ? <AiOutlineMenu /> : <MdOutlineKeyboardArrowLeft />}
                </div>
            </div>
            <div className="sidebar-container">
                {SidebarContentData.map((props) => {
                    return (
                        <div className="sidebar-content">
                            <div className={props.img} />
                            <Link to='/'>{props.link}</Link>
                        </div>
                    )
                })}
            </div>
            <div className="teams">
                <div className="teams-title">
                    <h6>Teams</h6>
                    <div className="teams-content">
                        <div className="sidebar-teams-img9" />
                        <BsPlus />
                    </div>
                </div>
                <div className="inner-input-content">
                    <span><BiSearch /></span>
                    <input
                        type="text"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search team"

                    />
                </div>
                <div className="teams-container">
                    {TeamsData.map((props) => {
                        return (
                            <div className="teams-container-content">
                                <div className="teams-container-desc">
                                    <div className={props.img} />
                                    <div className="teams-content-title" >
                                        <h6>{props.title}</h6>
                                        <p>{props.desc}</p>
                                    </div>
                                </div>
                                <span><BsThreeDotsVertical /></span>
                            </div>
                        )
                    })}

                </div>
            </div>
            <div className="premium">
                <div className="premium-banner">
                    <div className="premium-banner-img" />
                    <p>Premium</p>
                </div>
                <div className="premium-container">
                    <div className="premium-mainimg" />

                    <div className='premium-content'>
                        <h6>Upgrade to Premium Plan</h6>
                        {PremiumData.map((props) => {
                            return (
                                <div className="premium-inner-content">
                                    <div className={props.img} />
                                    <p>{props.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="premium-btn">
                    Upgrade
                    <div className="premium-btn-arrow">
                        <span><ImArrowRight2 /></span>
                    </div>
                </div>

            </div>
            <div className="premium-spaces" />
            <div className="sidebar-footer">
                <Link to='/'>Help</Link>
                <Link to='/'>Contact Us</Link>
                <Link to='/'>Security</Link>
                <p>©2021 HostCreator, Inc. All rights reserved.</p>
            </div>
            <div className="sidebar-footer-dark">
                <div className="sidebar-dark-content">
                    <div className="dark-inner-content">
                        <span><RiMoonFill /></span>
                    </div>
                    <Link to='/'>Light Mode</Link>

                </div>
                <div className="sidebar-dark-content">
                    <div className="dark-inner-content">
                        <span><BsQuestionLg /></span>
                    </div>
                    <Link to='/'>Help</Link>
                </div>

            </div>

        </div>
    )
}

export default Sidebar
