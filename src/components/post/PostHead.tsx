import React from 'react';
import {css} from '@emotion/react';
import {theme} from '../../styles/theme';
import Typography from '../common/Typography/Typography';
import {FolderIcon} from '../../icons/FolderIcon';

type PostHeadParam = {
  title: string | null;
  category: string | null;
  tags: readonly (string | null)[] | null;
  date: string | null;
};

const PostHead: React.FC<PostHeadParam> = ({title, category, tags, date}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 0.75rem;
        width: 100%;
      `}>
      <div
        css={css`
          display: flex;
          align-items: center;
          column-gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: ${theme.colors.colorSurface04};
          border-radius: 1rem;
        `}>
        <FolderIcon />
        <Typography component="span" variant="medium">
          {category}
        </Typography>
      </div>
      <Typography
        component="h1"
        variant="h1"
        css={css`
          margin: 0;
        `}>
        {title}
      </Typography>
      <div
        css={css`
          align-self: end;
        `}>
        <Typography component="span" variant="weak">
          {date}
        </Typography>
      </div>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        `}>
        {tags?.map(tag => (
          <Typography
            component="span"
            variant="weak"
            css={css`
              padding: 0.25rem 0.5rem;
              color: ${theme.colors.grayscale03};
              background-color: ${theme.colors.colorSurface01};
              border-radius: 1rem;
            `}>
            {tag}
          </Typography>
        )) ?? null}
      </div>
    </div>
  );
};

export default PostHead;
