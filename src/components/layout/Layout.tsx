import React, {FC} from 'react';
import {css, ThemeProvider} from '@emotion/react';
import {Children} from '../../types/common';
import {Profile} from '../common/Profile';
import {Search} from '../common/Search';
import {Tags} from '../common/Tags';
import {theme} from '../../styles/theme';

const Layout: FC<Children> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <div
                css={css`
                    position: fixed;
                    left: 0;
                    top: 0;
                    height: 100vh;
                    width: 100vw;
                    background-color: ${theme.colors.colorSurface00};
                    z-index: -1;
                `}></div>
            <div
                css={css`
                    display: grid;
                    height: 100vh;
                    grid-template-columns: repeat(1fr, 2);
                    grid-template-areas: 'sidebar content';
                    gap: ${theme.size.areaGap};

                    @media (max-width: 1100px) {
                        grid-template-columns: 1fr;
                        grid-template-areas: 'content';
                    }
                `}>
                <div
                    css={css`
                        grid-area: sidebar;
                        position: fixed;
                        display: flex;
                        flex-direction: column;
                        row-gap: ${theme.size.areaGap};
                        padding: ${theme.size.areaGap};
                        @media (max-width: 900px) {
                            display: none;
                        }
                    `}>
                    <Profile />
                    <Search />
                    <Tags />
                </div>
                <main
                    css={css`
                        grid-area: content;
                        display: flex;
                        flex-direction: column;
                        row-gap: 1.5rem;
                        align-self: stretch;
                        max-width: 768px;
                        padding: ${theme.size.areaGap} 0;
                        @media (max-width: 1100px) {
                            padding: ${theme.size.areaGap};
                        }
                    `}>
                    {children}
                </main>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
