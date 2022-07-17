import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
const ShowCategory = (props) => {

    const [showCategories, setShowCategories] = useState(false);
    const openCategories = () => {
        setShowCategories(!showCategories);
    }

    const [showCategories2, setShowCategories2] = useState(false);
    const openCategories2 = () => {
        setShowCategories2(!showCategories2);
    }

    return (
        <div>
            <div>
                <div className="section-title">
                    <h6>{props.category}</h6>
                    <span onClick={openCategories}>
                        {showCategories ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                    </span>
                </div>
                <div className="leftbar-content" style={{ display: showCategories ? 'flex' : 'none' }}>
                    <h6>{props.subcategory}</h6>
                    {props.select.map((l) => {
                        return (
                            <div>
                                <label className="new">
                                    <input type="checkbox" className="check-new" name="new" /><p>{l.title}</p>
                                </label>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default ShowCategory
