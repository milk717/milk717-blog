import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {graphql} from 'gatsby';
import '../stylesheets/home-page.scss';
import FeedCardList from '../components/FeedCardList';

const IndexPage = ({data}: PageProps<Queries.BlogPostListQuery>) => {
    return (
        <main>
            {/*<SideBar />*/}
            <FeedCardList data={data} />
        </main>
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
