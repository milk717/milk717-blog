import React from 'react';
import {Link} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolder} from '@fortawesome/free-solid-svg-icons';
import {GatsbyImage} from 'gatsby-plugin-image';
import {css, useTheme} from '@emotion/react';
import Typography from '../../styles/styled/typography';

const FeedCardList = ({data}: {data: Queries.BlogPostListQuery}) => {
    const theme = useTheme();
    const posts = data.allMarkdownRemark?.edges;

    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                row-gap: ${theme.size.areaGap};
            `}>
            {posts?.map(({node}) => (
                <Link
                    key={node.id}
                    to={node.frontmatter?.slug ?? '/404'}
                    css={css`
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        align-self: stretch;
                        border-radius: 2.5rem;
                        background-color: ${theme.colors.grayscaleWhite};
                    `}>
                    {node.frontmatter?.thumbnail?.childImageSharp
                        ?.gatsbyImageData && (
                        <GatsbyImage
                            image={
                                node.frontmatter.thumbnail.childImageSharp
                                    .gatsbyImageData
                            }
                            alt="썸네일 이미지"
                            css={css`
                                border-radius: 2.5rem 2.5rem 0 0;
                                height: 250px;
                                object-fit: contain;
                            `}
                        />
                    )}
                    <div
                        css={css`
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 8px;
                            align-self: stretch;
                            padding: 16px 16px 24px 16px;
                        `}>
                        <div
                            css={css`
                                display: flex;
                                align-items: center;
                                gap: 8px;
                                align-self: stretch;
                            `}>
                            <FontAwesomeIcon
                                icon={faFolder}
                                size="1x"
                                color={theme.colors.grayscale02}
                            />
                            <Typography.Weak>
                                {node.frontmatter?.category}
                            </Typography.Weak>
                        </div>
                        <Typography.Medium status={false}>
                            {node.frontmatter?.title}
                        </Typography.Medium>
                        <Typography.Weak>
                            {node.frontmatter?.date}
                        </Typography.Weak>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default FeedCardList;
