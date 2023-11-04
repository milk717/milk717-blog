import {css} from '@emotion/react';
import {theme} from '../../styles/theme';
import {Profile} from './Profile';
import {Search} from './Search';
import {Tags} from './Tags';
import React from 'react';

export const Sidebar = () => {
    return (
        <div
            css={css`
                position: sticky;
                top: 0;
                display: flex;
                flex-direction: column;
                row-gap: ${theme.size.areaGap};
                width: 262px;
                @media (max-width: 1000px) {
                    display: none;
                }
            `}>
            <Profile />
            <Search />
            <Tags />
        </div>
    );
};
