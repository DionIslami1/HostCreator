import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Toolbar from './Toolbar/Toolbar'
import Backdrop from './Backdrop/Backdrop'

const MobileNav = () => {

    const [sidebar, SetSidebar] = useState(false)

    const showSidebar = () => {
        SetSidebar(!sidebar)
    }

    const closeSidebar = () => {
        SetSidebar(false)
    }

    return (
        <div className="mobile-nav">
            {sidebar ? <Sidebar close={closeSidebar} /> : null}
            <Toolbar iconHandler={showSidebar} />
            {sidebar ? <Backdrop close={closeSidebar} /> : null}
        </div>
    )
}

export default MobileNav
