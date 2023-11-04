import {css, useTheme} from '@emotion/react';
import {Nav} from '../common/Nav';
import FeedCardList from './FeedCardList';
import * as React from 'react';
import {FC} from 'react';
import {ListBox} from '../common/ListBox';

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
            <Nav />
            <div
                css={css`
                    display: flex;
                    column-gap: 1.5rem;
                `}>
                <FeedCardList data={data} />
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        row-gap: ${theme.size.areaGap};
                        flex-grow: 1;
                        @media (max-width: 480px) {
                            display: none;
                        }
                    `}>
                    <ListBox title={'인기 게시글'} />
                    <ListBox title={'최근 댓글'} />
                </div>
            </div>
        </div>
    );
};
