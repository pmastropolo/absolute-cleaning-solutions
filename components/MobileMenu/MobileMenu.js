import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home3'
            },
        ]
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

    {
        id: 6,
        title: 'Services',
        link: '/service-s2',
        submenu: [
            {
                id: 61,
                title: 'All Services',
                link: '/service-s2'
            },
            {
                id: 62,
                title: 'Gutter Cleaning',
                link: '/service-single/gutter-cleaning'
            },
            {
                id: 63,
                title: 'House Wash',
                link: '/service-single/house-wash'
            },
            {
                id: 62,
                title: 'Pressure Washing',
                link: '/service-single/pressure-washing'
            },
            {
                id: 63,
                title: 'Roof Wash',
                link: '/service-single/roof-wash'
            },
            {
                id: 63,
                title: 'Window Cleaning',
                link: '/service-single/window-cleaning'
            },
            {
                id: 63,
                title: 'Deck & Fence',
                link: '/service-single/deck-fence-restoration'
            },
        ]
    },

    {
        id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'Project',
                link: '/project'
            },
            {
                id: 32,
                title: 'Project single',
                link: '/project-single/Express'
            },
            {
                id: 322,
                title: 'Team Single',
                link: '/team-single/Brubaker-Nilka'
            },
            {
                id: 332,
                title: 'Appointment',
                link: '/appointment'
            },
            {
                id: 334,
                title: 'Testimonial',
                link: '/testimonial'
            },
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/Save-Money-on-Cleaning-Supplies'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/Save-Money-on-Cleaning-Supplies'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-single-fullwidth/Save-Money-on-Cleaning-Supplies'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} exact activeclassname="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link exact activeclassname="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;