import React, { useState } from 'react'
import './toolbar.scss';
import { ImArrowRight2 } from 'react-icons/im'
import { BiSearch } from 'react-icons/bi'
import { BsSliders } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { IoNotifications } from 'react-icons/io5'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const Toolbar = () => {
    const [search, setSearch] = useState('');

    const [user, setUser] = useState(false);
    const openUser = () => {
        setUser(!user);
    }
    return (
        <div className="personal-toolbar">
            <div className="toolbar-btn">
                <div className="toolbar-btn-img" />
                Upgrade
                <div className="toolbar-btn-arrow">
                    <span><ImArrowRight2 /></span>
                </div>
            </div>
            <div className="toolbar-search">
                <span><BiSearch /></span>
                <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                />
                <span><BsSliders /></span>
            </div>
            <div className="toolbar-icons">
                <div className="circle1"><p>+</p></div>
                <div className="circle2"><p>?</p></div>
                <IoIosMail />
                <div className="notification">
                    <IoNotifications />
                    <div className='circle-ring' >
                        <p>3</p>
                    </div>
                </div>
            </div>
            <div className='toolbar-user'>
                <div className='toolbar-img'>
                    <div className='user-img'>

                    </div>
                    <div className='user-circle' />
                </div>
                <div className='user-content'>
                    <h6>Anna Wilson</h6>
                    <p>annawilson@gmail.com</p>
                </div>
                <div onClick={openUser}>
                    {user ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>
            </div>

        </div >
    )
}

export default Toolbar
