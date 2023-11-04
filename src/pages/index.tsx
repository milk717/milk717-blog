import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {graphql} from 'gatsby';
import FeedCardList from '../components/common/FeedCardList';
import Layout from '../components/layout/Layout';
import {Nav} from '../components/common/Nav';
import {css} from '@emotion/react';

const IndexPage = ({data}: PageProps<Queries.BlogPostListQuery>) => {
    return (
        <Layout>
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
                    <Nav />
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query BlogPostList {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        slug
                        title
                        date(formatString: "YYYY-MM-DD")
                        category
                        thumbnail {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    excerpt
                }
            }
        }
    }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
