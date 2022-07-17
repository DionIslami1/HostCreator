import React from 'react'
import './styles/sites.scss'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { VscMultipleWindows } from 'react-icons/vsc'
import { BsFillGridFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
const sites = () => {
    return (
        <div className="sites">
            <div className="sites-header">
                <div className="content">
                    <p>My Sites</p>
                </div>
                <div className="header-btn">
                    <div className="header-sort">
                        <p>Sort by:</p>
                        <div className="sort-btn">
                            <RiBarChartHorizontalLine />
                            <p>Recent Sites</p>
                            <span>| <MdOutlineKeyboardArrowDown /></span>
                        </div>
                    </div>
                    <div className="header-view">
                        <p>View by:</p>
                        <div className="view-btn">
                            <VscMultipleWindows />
                            <p>Websites</p>
                            <span>|<MdOutlineKeyboardArrowUp /></span>

                        </div>
                    </div>
                    <div className="header-tab-btn">
                        <div className="circle">  <BsFillGridFill /></div>
                        <div className="circle1"><AiOutlineMenu /></div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default sites
