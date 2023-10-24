import React, {FC} from 'react';
import './layout.scss';
import SideBar from '../sidebar/SideBar';
import {Children} from '../../types/common';

const Layout: FC<Children> = ({children}) => {
    return (
        <>
            <div className="cover"></div>
            <div className="layout">
                <div className="sidebar-area">
                    <SideBar />
                </div>
                <main className="content-area">{children}</main>
            </div>
        </>
    );
};

export default Layout;
