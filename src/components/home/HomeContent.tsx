import {css, useTheme} from '@emotion/react';
import FeedCardList from './FeedCardList';
import * as React from 'react';
import {FC} from 'react';

type Props = {
    data: Queries.BlogPostListQuery;
};

export const HomeContent: FC<Props> = ({data}) => {
    const theme = useTheme();
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                row-gap: 1.5rem;
            `}>
            <div
                css={css`
                    display: flex;
                    column-gap: 1.5rem;
                `}>
                <FeedCardList data={data} />
            </div>
        </div>
    );
};
