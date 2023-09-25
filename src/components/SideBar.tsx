import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faMagnifyingGlass,
    faHome,
    faFolder,
    faTags,
   faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import '../stylesheets/sidebar.scss'
import {StaticImage} from "gatsby-plugin-image";

export default function SideBar(){
    return(
        <div className="sidebar">
            <nav className='sidebar-nav'>
                <div className="header">
                    <FontAwesomeIcon icon={faBars} />
                    <h1>Milk717 Blog</h1>
                </div>
                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="home">
                    <FontAwesomeIcon icon={faHome} />
                    <p>Home</p>
                </div>
                <div className="categories">
                    <FontAwesomeIcon icon={faFolder} />
                    <p>Categories</p>
                </div>
                <div className="tags">
                    <FontAwesomeIcon icon={faTags} />
                    <p>Tags</p>
                </div>
                <div className="info">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <p>Info</p>
                </div>
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
    )
}
