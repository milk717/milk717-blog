import {css} from '@emotion/react';
import {theme} from '../../styles/theme';
import {Profile} from './Profile';
import {Search} from './Search';
import React from 'react';
import {ListBox} from './ListBox';
import {graphql, useStaticQuery} from 'gatsby';

export const Sidebar = () => {
  return (
    <div
      css={css`
        position: sticky;
        top: ${theme.size.areaGap};
        display: grid;
        grid-template-columns: 1fr;
        row-gap: ${theme.size.areaGap};
        width: 262px;
        @media (max-width: ${theme.breakpoints.tablet}) {
          width: 100%;
        }
      `}>
      <Profile />
      <Search />
      <ListBox
        title={'Tags'}
        list={
          useStaticQuery(graphql`
            query BlogTagsList {
              allMdx {
                group(field: {frontmatter: {tags: SELECT}}) {
                  text: fieldValue
                  subText: totalCount
                }
              }
            }
          `).allMdx.group
        }
      />
    </div>
  );
};
