import React, {FC, PropsWithChildren} from 'react';
import {css} from '@emotion/react';
import {theme} from '../../styles/theme';
import Layout from './Layout';

const HomeLayout: FC<PropsWithChildren> = ({children}) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          justify-content: center;
          gap: ${theme.size.areaGap};
          @media (max-width: ${theme.breakpoints.tablet}) {
            flex-direction: column;
          }
        `}>
        <aside
          css={css`
            flex-basis: 16rem;
          `}>
          {childrenArray.at(0)}
        </aside>
        <main
          css={css`
            display: flex;
            gap: ${theme.size.areaGap};
            flex-basis: 40rem;
            max-width: 40rem;
          `}>
          <section>{childrenArray.at(1)}</section>
          {/*<section>*/}
          {/*  <div*/}
          {/*    css={css`*/}
          {/*      position: sticky;*/}
          {/*      top: calc(${theme.size.areaGap} * 4);*/}
          {/*      display: flex;*/}
          {/*      flex-direction: column;*/}
          {/*      row-gap: ${theme.size.areaGap};*/}
          {/*    `}>*/}
          {/*    <ListBox title={'인기 게시글'} />*/}
          {/*    /!*<ListBox title={'최근 댓글'} />*!/*/}
          {/*  </div>*/}
          {/*</section>*/}
        </main>
      </div>
    </Layout>
  );
};

export default HomeLayout;
