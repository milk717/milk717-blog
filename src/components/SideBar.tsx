import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCircleInfo,
    faFolder,
    faHome,
    faMagnifyingGlass,
    faTags,
} from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/sidebar.scss';
import {Link} from 'gatsby';

export default function SideBar() {
    return (
        <div className="sidebar">
            <nav className="sidebar-nav">
                <div className="header">
                    <FontAwesomeIcon icon={faBars} />
                    <h1>Milk717 Blog</h1>
                </div>
                <div className="item search">
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
    );
}
