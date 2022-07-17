import React from 'react'
import './backdrop.scss'
const Backdrop = (props) => {
    return (
        <div className='nav-backdrop' onClick={props.close}>

        </div>
    )
}

export default Backdrop
