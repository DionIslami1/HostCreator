import React from 'react'
import './../personal.scss';
import Toolbar from '../toolbar/Toolbar'
import Toolbar2 from '../toolbar/Toolbar2'
import Sidebar from '../sidebar/Sidebar'
import Sites from './Sites'

const PersonalDashboard = () => {
    return (
        <div className="shared-personal-dashboard">
            <Sidebar />
            <div className="shared-right-dashboard">
                <Toolbar />
                <Toolbar2 />
                <Sites />
            </div>
        </div>
    )
}

export default PersonalDashboard
