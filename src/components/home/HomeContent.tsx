import {css} from '@emotion/react';
import FeedCardList from './FeedCardList';
import * as React from 'react';
import {FC} from 'react';

type Props = {
  data: Queries.BlogPostListQuery['allMdx']['edges'];
};

export const HomeContent: FC<Props> = ({data}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
      `}>
      <FeedCardList posts={data} />
    </div>
  );
};
