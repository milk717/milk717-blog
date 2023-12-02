import {css} from '@emotion/react';
import {theme} from '../../../styles/theme';
import {Profile} from './Profile';
import {Search} from './Search';
import React, {ChangeEventHandler} from 'react';
import {TagListBox} from './TagListBox';

type Props = {
  onTagFilterClick: (tags: string) => void;
  onSearchValueChanged: ChangeEventHandler<HTMLInputElement>;
};
export const Sidebar: React.FC<Props> = ({
  onTagFilterClick,
  onSearchValueChanged,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: ${theme.size.areaGap};
        @media (max-width: ${theme.breakpoints.tablet}) {
          width: 100%;
        }
      `}>
      <Profile />
      <Search onSearchValueChanged={onSearchValueChanged} />
      <TagListBox onClick={onTagFilterClick} />
    </div>
  );
};
