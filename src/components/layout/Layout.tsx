import React, {FC} from 'react';
import {css, ThemeProvider} from '@emotion/react';
import {Children} from '../../types/common';
import {theme} from '../../styles/theme';
import {Sidebar} from '../common/Sidebar';
import {Nav} from '../common/Nav';
import {ListBox} from '../common/ListBox';

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
        `}
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
          gap: ${theme.size.areaGap};
          padding: ${theme.size.areaGap};
          @media (max-width: ${theme.breakpoints.tablet}) {
            flex-direction: column;
          }
        `}>
        <aside>
          <Sidebar />
        </aside>
        <main
          css={css`
            display: grid;
            grid-template-columns: minmax(auto, 600px) 1fr;
            grid-template-rows: calc(${theme.size.navHeight} * 1) auto;
            gap: ${theme.size.areaGap};
            height: calc(100vh - calc(${theme.size.areaGap} * 2));
            > *:nth-child(1) {
              grid-area: 1 / 1 / 2 / 3;
            }
            @media (max-width: ${theme.breakpoints.laptop}) {
              grid-template-columns: 1fr;
              column-gap: 0;
              > *:nth-child(1) {
                grid-area: 1 / 1;
              }
              > *:nth-child(3) {
                display: none;
              }
            }
          `}>
          <nav
            css={css`
              grid-area: 1 / 1 / 2 / 3;
              align-self: start;
              z-index: 1;
            `}>
            <Nav />
          </nav>
          <section
            css={css`
              overflow-y: scroll;
            `}>
            {children}
          </section>
          <section>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                row-gap: ${theme.size.areaGap};
              `}>
              <ListBox title={'인기 게시글'} />
              <ListBox title={'최근 댓글'} />
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
