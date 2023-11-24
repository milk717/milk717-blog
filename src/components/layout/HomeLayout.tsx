import React, {FC, PropsWithChildren} from 'react';
import {css} from '@emotion/react';
import {theme} from '../../styles/theme';
import {Sidebar} from '../common/SideBar/Sidebar';
import {Nav} from '../common/Nav';
import {ListBox} from '../common/ListBox';
import Layout from './Layout';

const HomeLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Layout>
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
                position: sticky;
                top: ${theme.size.areaGap};
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
    </Layout>
  );
};

export default HomeLayout;
