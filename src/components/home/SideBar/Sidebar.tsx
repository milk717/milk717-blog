import {css} from '@emotion/react';
import {theme} from '../../../styles/theme';
import {Profile} from './Profile';
import {Search} from './Search';
import React, {ChangeEventHandler} from 'react';
import {TagDropdown} from './TagDropdown';

type Props = {
  selectedTag: string;
  onTagFilterClick: (tags: string) => void;
  onSearchValueChanged: ChangeEventHandler<HTMLInputElement>;
};
export const Sidebar: React.FC<Props> = ({
  selectedTag,
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
      {/*<TagDesktop onClick={onTagFilterClick} />*/}
      <TagDropdown selectedTag={selectedTag} onClick={onTagFilterClick} />
    </div>
  );
};
