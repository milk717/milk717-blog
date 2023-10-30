import {graphql, useStaticQuery} from 'gatsby';
import {Box} from './Box';
import {css} from '@emotion/react';
import React from 'react';

export const Tags = () => {
    const {
        allMarkdownRemark: {group},
    } = useStaticQuery(graphql`
        query BlogTagsList {
            allMarkdownRemark {
                group(field: {frontmatter: {tags: SELECT}}) {
                    fieldValue
                    totalCount
                }
            }
        }
    `);
    return (
        <Box
            style={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                row-gap: 1rem;
                padding: 1.5rem;
                border-radius: 2.5rem;
            `}>
            <h3
                css={css`
                    text-align: center;
                    font-size: 1.125rem;
                `}>
                Tags
            </h3>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    row-gap: 0.5rem;
                    flex-grow: 1;
                `}>
                {group.map(
                    ({
                        fieldValue,
                        totalCount,
                    }: {
                        fieldValue: string;
                        totalCount: number;
                    }) => (
                        <div
                            css={css`
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                            `}>
                            <p
                                css={css`
                                    font-size: 1rem;
                                `}>
                                {fieldValue}
                            </p>
                            <p
                                css={css`
                                    font-size: 0.8rem;
                                `}>
                                {totalCount}
                            </p>
                        </div>
                    ),
                )}
            </div>
        </Box>
    );
};
