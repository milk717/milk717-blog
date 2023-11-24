import React from 'react';
import {css} from '@emotion/react';
import {theme} from '../../styles/theme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolder} from '@fortawesome/free-solid-svg-icons';
import Typography from '../common/Typography/Typography';

type PostHeadParam = {
  title: string | null;
  category: string | null;
  tags: readonly (string | null)[] | null;
};

const PostHead: React.FC<PostHeadParam> = ({title, category, tags}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 1rem;
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
        <FontAwesomeIcon icon={faFolder} color={theme.colors.colorPoint03} />
        <Typography>{category}</Typography>
      </div>
      <Typography component="h1" variant="h1">
        {title}
      </Typography>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        `}>
        {tags?.map(tag => (
          <Typography
            component="span"
            variant="span"
            css={css`
              padding: 0.25rem 0.5rem;
              background-color: ${theme.colors.colorSurface02};
              border-radius: 0.5rem;
            `}>
            {tag}
          </Typography>
        )) ?? null}
      </div>
    </div>
  );
};

export default PostHead;
