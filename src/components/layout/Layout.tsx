import React from 'react';
import './layout.scss';
import SideBar from '../sidebar/SideBar';

const Layout = ({children}) => {
    return (
        <div className="layout">
            <SideBar />
            <main className="content-area">{children}</main>
        </div>
    );
};

export default Layout;
