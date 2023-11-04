import React, {FC} from 'react';
import {css, ThemeProvider} from '@emotion/react';
import {Children} from '../../types/common';
import {theme} from '../../styles/theme';
import {Sidebar} from '../common/Sidebar';

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
                <Sidebar />
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
