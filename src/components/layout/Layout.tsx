import React, {FC} from 'react';
import './layout.scss';
import SideBar from '../sidebar/SideBar';
import {Children} from '../../types/common';

const Layout: FC<Children> = ({children}) => {
    return (
        <div className="layout">
            <SideBar />
            <main className="content-area">{children}</main>
        </div>
    );
};

export default Layout;
