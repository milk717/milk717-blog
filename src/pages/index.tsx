import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {graphql} from 'gatsby';
import FeedCardList from '../components/FeedCardList';
import Layout from '../components/Layout';

const IndexPage = ({data}: PageProps<Queries.BlogPostListQuery>) => {
    return (
        <Layout>
            <FeedCardList data={data} />
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
                    }
                    excerpt
                }
            }
        }
    }
`;
export const Head: HeadFC = () => <title>Home Page</title>;
