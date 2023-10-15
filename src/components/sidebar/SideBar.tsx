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

    return (
        <div className="sidebar">
            <div className="profile">
                <img
                    src="https://avatars.githubusercontent.com/u/57657868?v=4"
                    alt="프로필 이미지"
                />
                <i className="nickname">{metadata.username}</i>
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
        </div>
    );
}
