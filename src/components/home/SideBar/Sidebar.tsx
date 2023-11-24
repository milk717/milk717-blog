import {css} from '@emotion/react';
import {theme} from '../../../styles/theme';
import {Profile} from './Profile';
import {Search} from './Search';
import React from 'react';
import {TagListBox} from './TagListBox';

type Props = {
  onTagFilterClick: (tags: string) => void;
};
export const Sidebar: React.FC<Props> = ({onTagFilterClick}) => {
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
      <TagListBox onClick={onTagFilterClick} />
    </div>
  );
};
