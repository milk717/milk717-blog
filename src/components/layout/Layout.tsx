import './layout.scss';
import React, {FC} from 'react';
import {ThemeProvider} from '@emotion/react';
import {Children} from '../../types/common';
import {theme} from '../../styles/theme';
import {Profile} from '../common/Profile';
import {Search} from '../common/Search';
import {Tags} from '../common/Tags';

const Layout: FC<Children> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <div className="cover"></div>
            <div className="layout">
                <div className="sidebar-area">
                    <Profile />
                    <Search />
                    <Tags />
                </div>
                <main className="content-area">{children}</main>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
