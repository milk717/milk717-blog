import React from 'react';
import '../stylesheets/layout.scss';
import SideBar from './SideBar';

const Layout = ({children}) => {
    return (
        <div className="layout">
            <SideBar />
            <main className="content-area">{children}</main>
        </div>
    );
};

export default Layout;
