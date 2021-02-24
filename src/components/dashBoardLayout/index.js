import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//import {default as image} from '../abc/image.svg';
import {BiHomeAlt, BsPeople, FiCalendar, HiOutlineDocumentReport, CgFileDocument, FiSettings } from 'react-icons/all';

const navItems = [
    {
        name: "Dashboard",
        icon: <BiHomeAlt />,
        link: '/'
    },
    {
        name: "Recruitment",
        icon: <BsPeople />,
        link: '/recruitment'
    },
    {
        name: "Onboarding",
        icon: <CgFileDocument/>,
        link: '/onboarding'
    },
    {
        name: "Report",
        icon: <HiOutlineDocumentReport />,
        link: '/report'
    },
    {
        name: "Calendar",
        icon: <FiCalendar />,
        link: '/calendar'
    },
    {
        name: "Setting",
        icon: <FiSettings />,
        link: '/setting'
    }
]

const DashBoardLayout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
                <div className="logo-container">
                    <h3>Newton HR</h3>
                </div>
                <div className="nav-container">
                    {
                        navItems.map((navItem, index) => (
                            <Link key={index} to={navItem.link}>
                            
                            <div  className={`nav-item ${navItem.link === location.pathname ? 'selected' : ''}`}>
                                {navItem.icon}
                                <label className="item-name">{navItem.name}</label>
                            </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="image-container-small">
                  <img src="image.svg" alt="image">
                      
                  </img>
                </div>
            </nav>
            <div className="main-container">
                {children}
            </div>

        </div>
    )
}

export default DashBoardLayout;