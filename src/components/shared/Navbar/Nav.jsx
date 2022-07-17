import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import clsx from "clsx";
import './nav.scss'
import {MdKeyboardArrowDown} from 'react-icons/md'
import ProductsMegamenu from './ProductsMegamenu'
import FeaturesMegamenu from './FeaturesMegamenu'
import ResourcesMegamenu from './ResourcesMegamenu'
import MobileNav from '../MobileNav/MobileNav';
import { FormattedMessage } from "react-intl";

const Nav = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
    const nav = document.querySelector(".nav");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 1 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <nav className={clsx('nav', isSticky ? "header__sticky" : "" )}>
                <div className="logo-container">
                    <div><Link to='/' className="icon-logo" ></Link></div>
                    <Link to='/'> <h6>HostCreator</h6></Link>
                </div>
                <div className="links">
                    <div className="nav-link" >
                        <Link to='/'  className="inner-link"> <FormattedMessage id="nav-category1"/><MdKeyboardArrowDown/>
                        </Link>
                        <div className="arrow" />
                        <ProductsMegamenu />
                    </div>
                    <div className="nav-link" >
                        <Link to='/'  className="inner-link"> <FormattedMessage id='nav-category2'/> <MdKeyboardArrowDown/></Link>
                        <div className="arrow"/>
                        <FeaturesMegamenu />
                    </div>
                    <div className="nav-link" >
                        <Link to='/' className="inner-link"> <FormattedMessage id='nav-category3'/> <MdKeyboardArrowDown/></Link>
                        <div className="arrow"/>
                        <ResourcesMegamenu />
                    </div>
                    <div className="nav-link" >
                        <Link to='/' className="inner-link"> <FormattedMessage id='nav-category4'/> </Link>
                    </div>
                </div>

                <div className="auth">
                    <Link to='/Login'> <FormattedMessage id='nav-login'/></Link>
                    <Link to='/Signup' className="sign-up"><FormattedMessage id='nav-signup'/></Link>
                </div>
                <MobileNav />
        </nav>
    )
}

export default Nav
