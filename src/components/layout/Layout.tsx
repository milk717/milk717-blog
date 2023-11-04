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
                    display: flex;
                    justify-content: center;
                    gap: ${theme.size.areaGap};
                    margin: ${theme.size.areaGap};
                `}>
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
                <main
                    css={css`
                        display: flex;
                        flex-direction: column;
                        row-gap: 1.5rem;
                        flex: 0 1 834px;
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
