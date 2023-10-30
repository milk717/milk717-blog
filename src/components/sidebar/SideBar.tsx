import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCircleInfo,
    faFolder,
    faHome,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import './sidebar.scss';
import {Link} from 'gatsby';
import {useLocation} from '@reach/router';

const menuItems = [
    {path: '/', label: 'Home', icon: faHome},
    {path: '/category/', label: 'Categories', icon: faFolder},
    {path: '/about/', label: 'About', icon: faCircleInfo},
];

export default function SideBar() {
    const location = useLocation();

    return (
        <div className="sidebar">
            <nav className="sidebar-nav">
                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
                    <input type="text" placeholder="Search..." />
                </div>

                {menuItems.map(item => (
                    <Link
                        key={item.path}
                        className={`item ${
                            location.pathname === item.path ? 'selected' : ''
                        }`}
                        to={item.path}>
                        <FontAwesomeIcon
                            icon={item.icon}
                            size="1x"
                            color={
                                location.pathname === item.path
                                    ? '#fff'
                                    : '#181919'
                            }
                        />
                        <p>{item.label}</p>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
