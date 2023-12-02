import {css} from '@emotion/react';
import FeedCardList from './FeedCardList';
import * as React from 'react';
import {FC} from 'react';
import {theme} from '../../styles/theme';
import Typography from '../common/Typography/Typography';

type Props = {
  data?: Queries.BlogPostListQuery['allMdx']['edges'];
};

export const HomeContent: FC<Props> = ({data}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
      `}>
      {data ? (
        <FeedCardList posts={data} />
      ) : (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            row-gap: ${theme.size.areaGap};
            width: 30rem;
          `}>
          <Typography variant="medium" component="p">
            🤔 검색 결과가 존재하지 않습니다!
          </Typography>
        </div>
      )}
    </div>
  );
};
