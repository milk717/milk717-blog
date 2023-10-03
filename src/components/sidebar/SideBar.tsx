import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCircleInfo,
    faFolder,
    faHome,
    faMagnifyingGlass,
    faTags,
} from '@fortawesome/free-solid-svg-icons';
import './sidebar.scss';
import {Link} from 'gatsby';

export default function SideBar() {
    const [sidebarVisibility, setSidebarVisibility] = useState(true);
    const handleSidebarToggleButtonClick = () => {
        setSidebarVisibility(!sidebarVisibility);
    };

    return sidebarVisibility ? (
        <div className="sidebar">
            <nav className="sidebar-nav">
                <div className="header">
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={handleSidebarToggleButtonClick}
                    />
                    <h1>Milk717 Blog</h1>
                </div>
                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder="Search..." />
                </div>
                <Link className="item home" to="/">
                    <FontAwesomeIcon icon={faHome} />
                    <p>Home</p>
                </Link>
                <Link className="item categories" to="/category">
                    <FontAwesomeIcon icon={faFolder} />
                    <p>Categories</p>
                </Link>
                <Link className="item tags" to="/tag">
                    <FontAwesomeIcon icon={faTags} />
                    <p>Tags</p>
                </Link>
                <Link className="item info" to="/info">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <p>Info</p>
                </Link>
            </nav>
            <div className="profile">
                <img
                    src="https://avatars.githubusercontent.com/u/57657868?v=4"
                    alt="프로필 이미지"
                />
                <div className="profile-link">
                    <i className="nickname">Milk717</i>
                    <i className="email">robolindasoo@gmail.com</i>
                </div>
            </div>
        </div>
    ) : (
        <div className="sidebar-toggle">
            <button
                className="toggle-btn"
                onClick={handleSidebarToggleButtonClick}>
                <FontAwesomeIcon icon={faBars} className="icon" />
            </button>
        </div>
    );
}
