import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCircleInfo,
    faFolder,
    faHome,
    faMagnifyingGlass,
    faTags,
} from '@fortawesome/free-solid-svg-icons';
import './sidebar.scss';
import {graphql, Link, useStaticQuery} from 'gatsby';

import {GithubMarkIcon} from '../../icons/GithubMarkIcon';
import {LinkedInIcon} from '../../icons/LinkedInIcon';
import {GmailDarkIcon} from '../../icons/GmailIcon';
import {useLocation} from '@reach/router';

const menuItems = [
    {path: '/', label: 'Home', icon: faHome},
    {path: '/category/', label: 'Categories', icon: faFolder},
    {path: '/tag/', label: 'Tags', icon: faTags},
    {path: '/info/', label: 'Info', icon: faCircleInfo},
];

export default function SideBar() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    username
                    githubUrl
                    email
                    linkedIn
                }
            }
        }
    `);
    const metadata = data.site?.siteMetadata;
    const location = useLocation();

    return (
        <div className="sidebar">
            <div className="profile">
                <img
                    src="https://avatars.githubusercontent.com/u/57657868?v=4"
                    alt="프로필 이미지"
                />
                <p className="nickname">{metadata.username}</p>
                <div className="profile-link">
                    <a href={metadata?.githubUrl}>
                        <GithubMarkIcon />
                    </a>
                    <a href={`mailto:${metadata?.email}`}>
                        <GmailDarkIcon />
                    </a>
                    <a href={metadata?.linkedIn}>
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
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
                        <FontAwesomeIcon icon={item.icon} size="1x" />
                        <p>{item.label}</p>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
