import React, { useState } from 'react'
import Link from "next/link";
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '/public/images/logo.svg'
import Image from 'next/image'


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className={props.topbarNone}>
            <HeaderTopbar />
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home"><Image src={Logo}
                                        alt="Absolute Cleaning Solutions Brand Logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link href="/service-s2">Services</Link>
                                            <ul className="sub-menu">
    <li><Link onClick={ClickHandler} href="/service-s2">All Services</Link></li>
    <li><Link onClick={ClickHandler} href="/service-single/gutter-cleaning">Gutter Cleaning</Link></li>
    <li><Link onClick={ClickHandler} href="/service-single/house-washing">House Wash</Link></li>
    <li><Link onClick={ClickHandler} href="/service-single/pressure-washing">Pressure Washing</Link></li>
    <li><Link onClick={ClickHandler} href="/service-single/roof-washing">Roof Wash</Link></li>
    <li><Link onClick={ClickHandler} href="/service-single/window-cleaning">Window Cleaning</Link></li>
    <li><Link onClick={ClickHandler} href="/service-single/deck-fence-restoration">Deck & Fence Restoration</Link></li>
</ul>

                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/project">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/project">Project</Link></li>
                                                <li><Link onClick={ClickHandler} href="/project-single/Express">Project Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team-single/Brubaker-Nilka">Team Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/appointment">Appointment</Link></li>
                                                <li><Link onClick={ClickHandler} href="/testimonial">Testimonial</Link></li>
                                                <li><Link onClick={ClickHandler} href="/404">Error 404</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/blog">Blog</Link></li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="close-form">
                                    <a onClick={ClickHandler} className="theme-btn" href="tel:(205) 612-6199"> <i className="fa fa-phone"
                                            aria-hidden="true"></i>
                                            <span>Free Estimate</span> (205) 612-6199</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;