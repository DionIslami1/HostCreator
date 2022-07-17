import React, { useState } from 'react'
import './styles/section.scss'
import { MdKeyboardArrowDown, MdOutlineMenu, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineSearch, AiOutlineAppstore } from
    'react-icons/ai'
import { IoOptionsOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { sectionDataImg, CategoryData } from './TemplatesData'
import ReactPaginate from 'react-paginate';
import ShowCategory from './ShowCategory'
import { FormattedMessage } from "react-intl";

const Section = () => {

    const [items, setItems] = useState(sectionDataImg.slice(0, 100));
    const [pageNumber, setPageNumber] = useState(0);

    const itemsPerPage = 15;
    const pagesVisited = pageNumber * itemsPerPage;

    const displayItems = items
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((props) => {
            return (
                <div className="section-box">
                    <div className="section-box-img" style={{ content: `url(${props.img})` }} />
                    <div className="section-box-content">
                        <div className="section-box-content-title">
                            <h6>{props.title}</h6>
                        </div>
                        <div className="section-box-menu">
                            <Link to='/'><FormattedMessage id="Templates-Section-1" /></Link>
                            <span>|</span>
                            <Link to='/'><FormattedMessage id="Templates-Section-2" /></Link>
                        </div>
                    </div>
                </div>
            )
        })

    const pageCount = Math.ceil(items.length / itemsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="section">
            <div className="section-header">
                <h6><FormattedMessage id="Templates-Section-3" /></h6>
                <div className="section-header-sort">
                    <div className="section-sortby">
                        <p><FormattedMessage id="Templates-Section-4" /></p>
                        <MdKeyboardArrowDown />
                    </div>
                    <div className="section-menu">
                        <AiOutlineSearch />
                        <span>|</span>
                        <AiOutlineAppstore />
                        <span>|</span>
                        <MdOutlineMenu />
                        <span>|</span>
                        <IoOptionsOutline />
                    </div>
                </div>
            </div>
            <div className="section-body">
                <div className="section-leftbar">
                    <div className="section-content">
                        {CategoryData.map((props) => {
                            return (
                                <ShowCategory
                                    category={props.category}
                                    subcategory={props.subcategory}
                                    select={props.select}
                                    to={props.to}
                                    title={props.title}
                                    category2={props.category2}
                                />
                            )
                        })}

                    </div>
                </div>
                <div className="section-container">

                    <div className='single-page'>{displayItems}</div>

                    <ReactPaginate
                        previousLabel={<MdOutlineKeyboardArrowLeft />}
                        nextLabel={<MdOutlineKeyboardArrowRight />}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />

                </div>
            </div>


        </div>
    )
}

export default Section
