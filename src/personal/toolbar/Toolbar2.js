import React from 'react'
import './toolbar2.scss'
import { MdOutlineCreateNewFolder } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'

const Toolbar2 = () => {
    return (
        <div className="toolbar2">
            <div className="toolbar2-content">
                <h6>Good Evening, Anna!</h6>
                <p>Last Login. 22.11.2021 - 20:22:11</p>
            </div>
            <div className="toolbar2-btn">
                <div className="btn-newfolder"><MdOutlineCreateNewFolder /><p>Create new folder</p></div>
                <div className="btn-newsites"><CgWebsite /><p>Create new site</p></div>
            </div>
        </div>
    )
}

export default Toolbar2
