import './layout.scss';
import React, {FC} from 'react';
import SideBar from '@components/sidebar/SideBar';
import {Children} from '@/types/common';
import {ThemeProvider} from '@emotion/react';
import {theme} from '@styles/theme';

const Layout: FC<Children> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <div className="cover"></div>
            <div className="layout">
                <div className="sidebar-area">
                    <SideBar />
                </div>
                <main className="content-area">{children}</main>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
