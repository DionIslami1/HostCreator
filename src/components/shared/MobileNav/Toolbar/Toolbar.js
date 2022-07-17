import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import clsx from "clsx";
import './Toolbar.scss';

const Toolbar = (props) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const nav = document.querySelector(".mobile-toolbar");
        // eslint-disable-next-line no-unused-vars
        const navHeight = nav.scrollHeight;

        const handleScroll = () => {
            const scrollHeight = window.pageYOffset;
            setIsSticky(scrollHeight > 1 ? true : false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <nav className={clsx('mobile-toolbar', isSticky ? "header__sticky" : "")}>
            <div className="logo">
                <div><Link to='/' className="inner-logo"></Link></div>
                <Link to='/'> <h6>HostCreator</h6></Link>
            </div>
            <button type="button" > <AiOutlineMenu onClick={props.iconHandler} /> </button>
        </nav>
    )
}

export default Toolbar
