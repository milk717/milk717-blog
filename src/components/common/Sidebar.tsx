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
                top: 0;
                display: flex;
                flex-direction: column;
                row-gap: ${theme.size.areaGap};
                width: 262px;
                @media (max-width: 1000px) {
                    display: none;
                }
            `}>
            <Profile />
            <Search />
            <ListBox
                title={'Tags'}
                list={
                    useStaticQuery(graphql`
                        query BlogTagsList {
                            allMarkdownRemark {
                                group(field: {frontmatter: {tags: SELECT}}) {
                                    text: fieldValue
                                    subText: totalCount
                                }
                            }
                        }
                    `).allMarkdownRemark.group
                }
            />
        </div>
    );
};
